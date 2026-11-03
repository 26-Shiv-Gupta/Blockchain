# 📘 Video 1: Introduction to Blockchain

## 1. What is Blockchain?
Blockchain ek digital technology hai jisme data ko Blocks ke form mein store kiya jata hai aur ye blocks ek dusre ke saath connected hote hain.

Simple language mein, Blockchain ek digital register (Bahi-Khata) ki tarah hai, jisme transactions aur information ka record maintain hota hai.

Iski copies network ke multiple computers par maintain ki ja sakti hain.

### Main Purpose of Blockchain
- Data ko securely store karna.
- Unauthorized changes ko difficult banana.
- Transactions mein transparency provide karna.
- Kisi ek central authority par dependency kam karna.

## 2. How Does Blockchain Work?
Blockchain mainly 4 steps mein kaam karta hai:

### Step 1: Transaction
Maan lo Rahul, Amit ko ₹500 send karta hai. Ye transaction blockchain network par request ke form mein jaati hai.

### Step 2: Verification
Network ke computers (Nodes) transaction ko verify karte hain ki transaction valid hai ya nahi.

### Step 3: Block Creation
Verified transactions ko collect karke ek block mein store kiya jata hai.

### Step 4: Block Added to Blockchain
Naya block previous block ke saath cryptographically connect ho jata hai. Is tarah blockchain continuously grow karti rehti hai.

## 3. Important Components of Blockchain
| Component   | Meaning
|-------------|-------------------------------------------    
| Block       | Data aur transactions store karne ka container.
| Chain       | Multiple blocks ka connected sequence.
| Node        | Blockchain network se connected computer.
| Hash        | Data ka unique digital fingerprint.
| Transaction | Network par hone wala data transfer.
| Miner       | Transactions verify karne aur blocks add karne wala participant (Proof of Work systems mein).
| Validator   | Consensus mechanism ke through transactions aur blocks validate karne wala participant.

## 4. Four Important Properties of Blockchain

### 1. Immutability
Immutability ka matlab hai ki ek baar information successfully blockchain mein record aur confirm ho jaati hai, toh us information ko normally erase ya modify nahi kiya ja sakta.

- Blockchain mein existing records ko change karna bahut difficult hota hai.
- Agar koi purane data mein changes karne ki koshish karta hai, toh cryptographic security aur network verification us change ko detect karne mein help karte hain.

**Example:**

Maan lo Rahul ne Amit ko ₹500 transfer kiye aur transaction blockchain par record ho gayi.

Ab Rahul ya Amit normally us transaction ko delete ya edit nahi kar sakte.

### 2. Decentralization
Decentralization ka matlab hai ki kisi ek person, company ya organization ke paas poore system ka control nahi hota.

- Network ke multiple computers (Nodes) blockchain ko maintain karte hain.
- Transactions network ke rules ke according verify hoti hain.
- Kisi ek central authority par dependency kam hoti hai.

**Example:**

Traditional Banking:
- Bank transactions ka record maintain karta hai.
- Bank ke paas centralized control hota hai.

Blockchain:
- Multiple computers network ka part hote hain.
- Network participants transactions verify karne mein help karte hain.
- Kisi ek central authority ki zaroorat nahi hoti (public decentralized blockchain mein).

### 3. Transparency and Trustworthiness
**Transparency:** Blockchain mein recorded transactions ko network participants verify kar sakte hain.

- Public blockchain mein transactions publicly visible hoti hain.
- Koi bhi person transaction history check kar sakta hai.
- Information ko verify karna easy hota hai.

**Trustworthiness:** Blockchain cryptography aur consensus mechanisms ka use karti hai.

- Network participants transactions verify karte hain.
- Users ko kisi ek person ya organization par blindly trust karne ki zaroorat kam hoti hai.

**Example:**

Rahul ne Amit ko ₹500 transfer kiye. Public blockchain par koi bhi us transaction ka record check kar sakta hai.


## What is Ledger?
Ledger ek record book (Bahi-Khata) hoti hai jisme transactions aur financial activities ka record maintain kiya jata hai.

Simple language mein, jab bhi koi paisa receive ya send hota hai, toh uska record ledger mein maintain hota hai.

**Example:**
Maan lo Rahul aur Amit ke beech ye transactions hui:

|         Transaction         | Amount |
|-----------------------------|-------:|
| Rahul ne Amit ko paise diye |  ₹500  |
| Amit ne Rahul ko paise diye |  ₹200  |
| Rahul ne Amit ko paise diye |  ₹300  |

Ye saari transactions ledger mein record hongi.

### Types of Ledger
**1. Centralized Ledger**

- Ismein records ek central authority maintain karti hai.
- Example: Traditional bank ka ledger.

**2. Distributed Ledger**

- Ismein ledger ki copies network ke multiple computers par maintain hoti hain.
- Network participants records ko verify kar sakte hain.

## What is Decentralized System?
Decentralized system ek aisa system hota hai jisme control aur decision-making kisi ek central authority ke paas nahi hoti, balki multiple participants ke beech distributed hoti hai.

Simple language mein, poora system kisi ek person, company ya server par dependent nahi hota.

### Centralized vs Decentralized System
| Centralized System | Decentralized System |
|--------------------|----------------------|
| Ek central authority control karti hai. | Control multiple participants ke beech distributed hota hai. |
| Central authority records maintain karti hai. | Multiple nodes records maintain kar sakte hain. |
| Central authority par dependency hoti hai. | Single authority par dependency kam hoti hai. |
| Example: Traditional Banking. | Example: Public Bitcoin Network. |

## Difference Between Ledger and Decentralized System
| Ledger | Decentralized System |
|--------|----------------------|
| Transactions ka record hota hai. | System ka control distributed hota hai. |
| Data store karta hai. | Network ko operate aur manage karta hai. |
| Centralized ya distributed ho sakta hai. | Multiple participants ke beech control distribute hota hai. |

## Connection Between Blockchain and DLT
**DLT = Distributed Ledger Technology**

Blockchain ek type ki Distributed Ledger Technology (DLT) hai.

Ismein:

- Transactions ledger mein record hoti hain.
- Transactions blocks mein organize hoti hain.
- Blocks cryptographically connected hote hain.
- Network ke nodes ledger ko maintain aur verify karte hain.

**Remember:** Har Distributed Ledger blockchain nahi hota, lekin blockchain DLT ka ek type hai.

## Real-Life Applications of Blockchain
1. **Cryptocurrency:** Bitcoin aur Ethereum.
2. **Banking:** Secure financial transactions.
3. **Healthcare:** Medical records management.
4. **Supply Chain:** Products ko source se destination tak track karna.
5. **Digital Identity:** Digital identity verification.
6. **Smart Contracts:** Conditions fulfill hone par automatically execute hone wale programs.

## Quick Revision – Important Points
- Blockchain ek Distributed Ledger Technology (DLT) hai.
- Data blocks ke form mein store hota hai.
- Blocks cryptographically ek dusre se connected hote hain.
- Hash data ka digital fingerprint hota hai.
- Node blockchain network se connected computer hota hai.
- Immutability ka matlab recorded data ko change karna difficult hona.
- Decentralization ka matlab kisi ek central authority ka complete control nahi hona.
- Transparency ka matlab transactions ko verify aur check kar pana.
- Ledger ek digital record book ki tarah hota hai.
- Distributed Ledger ki copies multiple computers par maintain hoti hain.

---

# 📗 Video 2: Blockchain Implementation Using JavaScript

## 1. Introduction

Is video mein hum JavaScript ki help se Blockchain ka basic structure implement kar rahe hain.

Is code mein mainly 2 functionalities hain:

1. **Create New Block:** Blockchain mein ek naya block create aur add karna.
2. **Create New Transaction:** Blockchain ke liye ek new transaction create karna.

---

## 2. Complete Code

```javascript
function Blockchain() {
    this.chain = [];
    this.newTransactions = [];
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
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
    const newTransaction = {
        sender: sender,
        recipient: recipient,
        amount: amount
    };

    this.newTransactions.push(newTransaction);
    return newTransaction;
};

module.exports = Blockchain;
```

---

## 3. Understanding Blockchain Constructor
```javascript
function Blockchain() {
    this.chain = [];
    this.newTransactions = [];
}
```

Yahan `Blockchain` naam ka ek constructor function create kiya gaya hai.

Constructor function ka use objects create karne ke liye hota hai.

Iske andar 2 properties hain:

### A. this.chain = []

- `chain` ek array hai.
- Is array mein blockchain ke saare blocks store honge.
- Starting mein array empty hota hai, kyunki abhi koi block create nahi hua hai.

Example:

```javascript
this.chain = [];
```

Initially:
```javascript
chain = []
```

Jab naye blocks create honge:
```javascript
chain = [
    block1,
    block2,
    block3
]
```

### B. this.newTransactions = []
- Is array mein pending transactions store hoti hain.
- Jab users new transactions create karte hain, toh wo is array mein add hoti hain.
- Jab naya block create hota hai, toh pending transactions us block mein include hoti hain.

Example:

```javascript
this.newTransactions = [];
```

After creating two transactions:
```javascript
newTransactions = [
    {
        sender: "Rahul",
        recipient: "Amit",
        amount: 500
    },
    {
        sender: "Amit",
        recipient: "Priya",
        amount: 200
    }
]
```

**Remember:**
- `chain` = Saare blocks ka record.
- `newTransactions` = Pending transactions ka record.

---

## 4. Understanding createNewBlock()
```javascript
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
```

Ye function blockchain mein ek new block create karne ke liye use hota hai.

Ismein 3 parameters pass hote hain:

|     Parameter     |                  Meaning                  |
|-------------------|-------------------------------------------|
|       nonce       | Mining process mein use hone wala number. |
| previousBlockHash |          Previous block ka hash.          |
|        hash       |          Current block ka hash.           |

### A. Creating a New Block
```javascript
const newBlock = {
    height: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.newTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash: previousBlockHash
};
```

Yahan `newBlock` naam ka object create hota hai.

Is object mein 6 properties hain.

### 1. height

```javascript
height: this.chain.length + 1
```

- Ye block ka number ya position batata hai.
- `this.chain.length` se existing blocks ki total quantity pata chalti hai.
- `+1` new block ki position calculate karta hai.

Example:

Agar chain mein 2 blocks hain:

```javascript
this.chain.length = 2;
```

Toh new block ki height hogi:

```javascript
height = 2 + 1 = 3;
```

Matlab ye third block hoga.

### 2. timestamp

```javascript
timestamp: Date.now()
```

- Ye block create hone ka current time store karta hai.
- `Date.now()` JavaScript ka built-in method hai.
- Ye milliseconds mein time return karta hai.

### 3. transactions

```javascript
transactions: this.newTransactions
```

- Is property mein pending transactions store hoti hain.
- `this.newTransactions` array ki transactions new block mein include hoti hain.

Example:

```javascript
transactions: [
    {
        sender: "Rahul",
        recipient: "Amit",
        amount: 500
    }
]
```

### 4. nonce

```javascript
nonce: nonce
```

Nonce ka full form commonly **Number Used Once** bataya jata hai.

- Ye ek number hota hai.
- Proof of Work blockchain mein mining ke time nonce ko repeatedly change kiya jata hai.
- Miner aisa nonce find karta hai jisse required hash condition satisfy ho.

Example:

```javascript
nonce: 12345
```

### 5. hash

```javascript
hash: hash
```

- Ye current block ka hash store karta hai.
- Hash ek digital fingerprint ki tarah hota hai.
- Ye block ke data se generate hota hai.

Example:

```javascript
hash: "abc123xyz"
```

### 6. previousBlockHash

```javascript
previousBlockHash: previousBlockHash
```

- Ismein previous block ka hash store hota hai.
- Iski help se current block previous block ke saath connected rehta hai.

Example:

```javascript
previousBlockHash: "xyz789abc"
```

### B. Adding Block to Blockchain

```javascript
this.chain.push(newBlock);
```

- `push()` JavaScript array ka method hai.
- Ye array ke end mein new element add karta hai.
- Yahan new block ko `chain` array mein add kiya ja raha hai.

### C. Returning New Block

```javascript
return newBlock;
```

Ye newly created block ko function ke caller ko return karta hai.

---

## 5. Understanding createNewTransaction()

```javascript
Blockchain.prototype.createNewTransaction = function(sender, recipient, amount) {
```

Is function ka purpose ek new transaction create karna hai.

Ismein 3 parameters hain:

| Parameter | Meaning |
|---|---|
| sender | Jo person paise send kar raha hai. |
| recipient | Jo person paise receive kar raha hai. |
| amount | Kitne paise transfer ho rahe hain. |

### A. Creating Transaction Object

```javascript
const newTransaction = {
    sender: sender,
    recipient: recipient,
    amount: amount
};
```

Yahan ek transaction object create hota hai.

Example:

```javascript
const newTransaction = {
    sender: "Rahul",
    recipient: "Amit",
    amount: 500
};
```

Matlab Rahul ne Amit ko ₹500 transfer kiye.

### B. Adding Transaction to Array

```javascript
this.newTransactions.push(newTransaction);
```

- `push()` method transaction ko `newTransactions` array mein add karta hai.
- Jab tak new block create nahi hota, transaction pending rehti hai.

### C. Returning Transaction

```javascript
return newTransaction;
```

Ye newly created transaction object ko return karta hai.

---

## 6. Understanding Prototype in JavaScript

```javascript
Blockchain.prototype.createNewBlock = function() {
    // Code
};
```

JavaScript mein Prototype ek mechanism hai jiske through objects dusre objects ke properties aur methods access kar sakte hain.

Yahan:

- `Blockchain` ek constructor function hai.
- `prototype` ke through methods define kiye gaye hain.
- `new Blockchain()` se create hua object in methods ko access kar sakta hai.

Example:

```javascript
const bitcoin = new Blockchain();

bitcoin.createNewTransaction("Rahul", "Amit", 500);
```

**Benefits of Prototype:**

Agar hum multiple Blockchain objects create karte hain, toh har object ke liye methods ki separate copy create nahi hoti. Sabhi objects same prototype methods share kar sakte hain.

---

## 7. Understanding module.exports

```javascript
module.exports = Blockchain;
```

- Node.js mein `module.exports` ka use function, object ya variable ko dusri file mein export karne ke liye hota hai.
- Isse hum `Blockchain` constructor ko kisi dusri file mein import karke use kar sakte hain.

Example:

**blockchain.js**

```javascript
module.exports = Blockchain;
```

**dev/test.js**

```javascript
const Blockchain = require('../blockchain');

const bitcoin = new Blockchain();
```

Ab hum `bitcoin` object ke through Blockchain ke methods use kar sakte hain.

---

## 8. Complete Working Example

```javascript
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

// Create first transaction
bitcoin.createNewTransaction("Rahul", "Amit", 500);

// Create second transaction
bitcoin.createNewTransaction("Amit", "Priya", 200);

// Create first block
const block1 = bitcoin.createNewBlock(
    12345,
    "000000000000",
    "abc123"
);

console.log(block1);
```

### Expected Output (Simplified)

```javascript
{
    height: 1,
    timestamp: 1790000000000,
    transactions: [
        {
            sender: "Rahul",
            recipient: "Amit",
            amount: 500
        },
        {
            sender: "Amit",
            recipient: "Priya",
            amount: 200
        }
    ],
    nonce: 12345,
    hash: "abc123",
    previousBlockHash: "000000000000"
}
```

*Note: Timestamp aur hashes illustrative hain. Actual execution mein values different hongi.*

---

## 9. Complete Execution Flow

1. `new Blockchain()` se blockchain object create hota hai.
2. `chain` aur `newTransactions` empty arrays initialize hote hain.
3. `createNewTransaction()` call hota hai.
4. Transaction object create hota hai.
5. Transaction `newTransactions` array mein add hoti hai.
6. `createNewBlock()` call hota hai.
7. New block object create hota hai.
8. Pending transactions block mein include hoti hain.
9. Block `chain` array mein add ho jata hai.

---

## 10. Why Previous Block Hash?

Blockchain mein har new block ke andar previous block ka hash store hota hai.

Example:

| Block | Previous Block Hash | Current Hash |
|---|---|---|
| Block 1 | 000000 | ABC123 |
| Block 2 | ABC123 | XYZ456 |
| Block 3 | XYZ456 | PQR789 |

Is tarah har block apne previous block se connected rehta hai.

Agar kisi previous block ka data change hota hai, toh uska hash change ho sakta hai. Isse subsequent blocks ke stored previous hashes match nahi karenge.

Ye blockchain mein tampering detect karne mein help karta hai.

---

## 11. Important Observation: Transaction Array Reset

Original code mein ek important issue hai:

```javascript
transactions: this.newTransactions
```

Block create hone ke baad `newTransactions` array reset nahi kiya gaya hai.

### Problem

Maan lo:

1. First block mein Rahul → Amit ki ₹500 transaction add hui.
2. First block create ho gaya.
3. Ab Amit → Priya ki ₹200 transaction add hui.
4. Second block create hua.

Agar array reset nahi karte, toh second block mein first aur second dono transactions aa jayengi.

### Solution

```javascript
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {

    const newBlock = {
        height: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.newTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.chain.push(newBlock);

    this.newTransactions = [];

    return newBlock;
};
```

```javascript
this.newTransactions = [];
```

Ye line new empty array create karti hai, taaki next block mein sirf new pending transactions add hon.

---

