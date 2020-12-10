const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3000
const customerRoute = require("./routes/customer.routes.js")
// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})
customerRoute(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})