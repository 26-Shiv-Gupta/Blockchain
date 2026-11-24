// api.js
var express = require('express');
var app = express();
const port = process.argv[2];
const bodyParser = require('body-parser');
const rp = require('request-promise')

app.use(bodyParser.json());

const Blockchain = require('./blockchain');
const blockchain = new Blockchain();

app.get('/', function (req, res) {
  res.send("This is port: " + port);
});

app.get('/blockchain', function (req, res) {
  res.send(blockchain);
});

app.post('/transaction', function (req, res) {
  const data = req.body;
  blockchain.createNewTransaction(data.sender, data.recipent, data.amount)
  res.status(200).json({ note: "New transaction created" })
})

app.post('/transaction/broadcast', function (req, res) {
  const newTransaction = blockchain.createNewTransaction(req.body.sender, req.body.recipent, req.body.amount);

  const requestPromises = [];
  blockchain.networkNodes.forEach(data => {
    const requestOptions = {
      uri: data + '/transaction',
      method: 'POST',
      body: {
        sender: req.body.sender,
        recipent: req.body.recipent,
        amount: req.body.amount
      },
      json: true
    }

    requestPromises.push(rp(requestOptions))
  })

  Promise.all(requestPromises)
    .then(data => {
      res.status(200).json({ note: "Transactions added successfully" })
    })
})

app.get('/mine', function (req, res) {
  // call the function to create new block

  const lastBlock = blockchain.getLastBlock();
  const previousBlockHash = lastBlock.hash;
  const currentBlockData = blockchain.newTransactions;
  const nonce = blockchain.proofOfWork(previousBlockHash, currentBlockData)
  const hash = blockchain.generateHash(previousBlockHash, currentBlockData, nonce)
  const newBlock = blockchain.createNewBlock(nonce, previousBlockHash, hash);

  res.json(newBlock)

  // broadcast it to everyone in network

  const requestPromises = [];
  blockchain.networkNodes.forEach(networkNodeUrl => {
    const requestOptions = {
      uri: networkNodeUrl + 'receive-new-block',
      method: 'POST',
      body: {newBlock: newBlock},
      json: true
    };

    requestPromises.push(rp(requestOptions));
  })

  Promise.all(requestPromises)
  .then(data => {
    const requestOptions = {
      uri: blockchain.currentNodeUrl + '/transaction/broadcast',
      method: 'POST',
      body: {
        amount: 12.5,
        sender: "00",
        recipient: blockchain.currentNodeUrl
      },
      json: true
    }

    return rp(requestOptions)
  })
  .then(data => {
    res.json({
      note: 'New block mined & broadcast successfully',
      block: newBlock
    })
  })

})

app.post('receive-new-block', function(req, res) {
  const newBlock = req.body.newBlock;
  const lastBlock = blockchain.getLastBlock();
  const correctHash = lastBlock.hash === newBlock.previousBlockHash;
  const correctIndex = lastBlock['index'] + 1 === newBlock['index'];

  if (correctHash && correctIndex) {
    blockchain.chain.push(newBlock);
    // blockchain.pendingTransactions = [];
    res.json({
      note: 'New block received and accepted', 
      newBlock: newBlock
    })
  } else {
    res.json({
      note: 'New block rejected.',
      newBlock: newBlock
    })
  }
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
})

app.post('/register-and-broadcast-node', function (req, res) {

  const newNodeUrl = req.body.newNodeUrl;
  const nodeNotAlreadyPresent = blockchain.networkNodes.indexOf(newNodeUrl) == -1;
  const notCurrentNode = blockchain.currentNodeUrl !== newNodeUrl;

  if (nodeNotAlreadyPresent && notCurrentNode)
    blockchain.networkNodes.push(newNodeUrl);

  const regNodesPromises = [];
  blockchain.networkNodes.forEach(networkNodeUrl => {
    const requestOptions = {
      uri: networkNodeUrl + '/register-node',
      method: 'POST',
      body: { 'newNodeUrl': newNodeUrl },
      json: true
    }

    regNodesPromises.push(rp(requestOptions));
  })

  Promise.all(regNodesPromises)
    .then(data => {
      const bulkRegistrationOption = {
        uri: newNodeUrl + "/register-bulk-node",
        method: "POST",
        body: { "allNetworkNodes": [...blockchain.networkNodes, blockchain.currentNodeUrl] },
        json: true
      }

      return rp(bulkRegistrationOption)
    })
    .then(data => {
      res.status(200).json({ note: 'new node registerd with network successfully.' })
    })
})

app.post('/register-node', function (req, res) {

  const newNodeUrl = req.body.newNodeUrl;
  const nodeNotAlreadyPresent = blockchain.networkNodes.indexOf(newNodeUrl) == -1;
  const notCurrentNode = blockchain.currentNodeUrl !== newNodeUrl;

  if (nodeNotAlreadyPresent && notCurrentNode) {
    blockchain.networkNodes.push(newNodeUrl);
    res.status(200).json({ note: "New node registered successfully" })
  } else {
    res.json({ note: "Duplicate" })
  }
})

app.post('/register-bulk-node', function (req, res) {
  const allNetworkNodes = req.body.allNetworkNodes;
  allNetworkNodes.forEach(node => {
    const nodeNotAlreadyPresent = blockchain.networkNodes.indexOf(node) == -1;
    const notCurrentNode = blockchain.currentNodeUrl !== node;
    if (nodeNotAlreadyPresent && notCurrentNode) {
      blockchain.networkNodes.push(node);
    }
  });
  res.status(200).json({ note: "New node registered successfully" })
})