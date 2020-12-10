const db = require("./db.js");

// constructor
const Customer = function (customer) {
    this.email = customer.email;
    this.name = customer.name;
    this.active = customer.active;
};

Customer.findAll = async () => {
    try {
        const [results] = await db.query("SELECT * FROM customers");
        return {
            success: true,
            results
        }
    } catch (e) {
        return {
            success: false,
            error: e.message
        }
    }
};



module.exports = Customer;