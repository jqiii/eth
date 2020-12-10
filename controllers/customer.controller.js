const Customer = require("../models/customer.model.js");

exports.findAll = async (req, res) => {
    const customer = await Customer.findAll()
    res.send(customer);
}; 