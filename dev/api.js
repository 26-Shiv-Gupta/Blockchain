// api.js
var express = require('express');
var app = express();
const port = process.argv[2];
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const Blockchain = require('./blockchain');
const blockchain = new Blockchain();

app.get('/', function (req, res) {
  res.send("This is port: "+port);
});

app.get('/blockchain', function (req, res) {
  res.send(blockchain);
});

app.post('/transaction', function(req, res) {
  const data  = req.body;
  blockchain.createNewTransaction(data.sender, data.recipent, data.amount)
  res.status(200).json({note: "New transaction created"})
})

app.listen(port, function () {
  console.log('Example app listening on port '+port);
})