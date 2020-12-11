const db = require("./db.js");

// constructor
const eth = {};
eth.batchCreate = async (data) => {
    try {
        let values = [];
        for (const x in data) {
            values.push(`('${data[x].address}','${data[x].privateKey}')`)
        }

        sql = `
            INSERT INTO
            eth_address( address, private_key)
            VALUES ${values.join(',')};
        `
        const [results] = await db.query(sql);
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



module.exports = eth;