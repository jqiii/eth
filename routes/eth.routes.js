
const eth = require("../controllers/eth.controller.js");
module.exports = app => {

    app.post('/createAccount', eth.createAccount);

    app.post('/getBalance', eth.getBalance);

    app.post('/getTransaction', eth.getTransaction);
};