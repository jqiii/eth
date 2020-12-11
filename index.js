const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const cors = require('cors');
const port = 3000
app.use(cors());
const customerRoute = require("./routes/customer.routes.js")
const ethRoute = require("./routes/eth.routes.js")
// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

customerRoute(app);
ethRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})