// api.js
var express = require('express');
var app = express();
const port = process.argv[2];
const bodyParser = require('body-parser');

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

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
})

app.post('/register-node', function (req, res) {
  console.log(req.body)
  const newNodeUrl = req.body.newNodeUrl;
  const nodeNotAlreadyPresent = blockchain.networkNodes.indexOf(newNodeUrl) == -1;
  const notCurrentNode = blockchain.currentNodeUrl !== newNodeUrl;
  if (nodeNotAlreadyPresent && notCurrentNode) {
    blockchain.networkNodes.push(newNodeUrl);
    res.status(200).json({ note: "New node registered successfully" })
  } else {
    res.status(400).json({ note: "Node already present, unable to register." })
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