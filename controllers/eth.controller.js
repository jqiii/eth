const Web3 = require('web3');
// const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/bbede64514314b1da918d43c9ae27913'));
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/bbede64514314b1da918d43c9ae27913'));
const eth = require("../models/eth.model.js");

exports.getBalance = async function (req, res) {
    const { address } = req.body;
    try {
        let balance;
        balance = await web3.eth.getBalance(address,)
        balance = web3.utils.fromWei(balance, 'ether')
        res.send({ success: true, balance });
    } catch (error) {
        res.send({ success: false, msg: error.message });
    }
}

exports.createAccount = async function (req, res) {
    console.log('create account req', req.body);
    const { count } = req.body;
    let account = [];
    for (let i = 0; i < count; i++) {
        // const entropy = (Math.random() * 1e50).toString(36);
        const acc = await web3.eth.accounts.create(web3.utils.randomHex(32));
        account.push(acc);
    }
    const result = await eth.batchCreate(account)
    res.send(result);
}

exports.getTransaction = function (req, res) {
    console.log('transaction req', req.body);
    const { transactionHash } = req.body;
    try {
        if (!transactionHash) return res.send({ error: 'Transaction hash is empty' });
        web3.eth.getTransaction(transactionHash, (err, data) => {
            console.log('err', err);
            console.log('data', data);
            res.send({ data });
        });
    } catch (error) {
        res.send({ error });
    }
}