const sha256 = require('sha256');

function Blockchain() {
    this.chain = [];
    this.newTransactions = [];
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){
    const newBlock = {
        height: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.newTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.chain.push(newBlock);
    return newBlock;
}

Blockchain.prototype.createNewTransaction = function(sender, recipient, amount) {
    // Implementation for creating a new transaction
    const newTransaction = {
        sender: sender,
        recipient: recipient,
        amount: amount
    };

    this.newTransactions.push(newTransaction);
    return newTransaction;
};

Blockchain.prototype.generateHash = function(previousBlockHash, currentBlockData, nonce) {
    const stringData = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(stringData);
    return hash;
}

Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
    let nonce = 0;
    let hash = this.generateHash(previousBlockHash, currentBlockData, nonce);
    while (hash.substring(0, 4) !== '0000') {
        nonce++;
        hash = this.generateHash(previousBlockHash, currentBlockData, nonce);
    }
    return nonce;
}

module.exports = Blockchain;