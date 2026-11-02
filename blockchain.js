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

module.exports = Blockchain;