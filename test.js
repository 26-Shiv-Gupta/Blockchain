const Blockchain = require('./blockchain');
const blockchain = new Blockchain();

blockchain.createNewBlock(100, '0', 'abc123');

console.log(blockchain.chain);
