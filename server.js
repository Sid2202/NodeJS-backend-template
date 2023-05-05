const express = require('express');
const cors = require("cors");
var bodyParser = require('body-parser');

const port = 5080;

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.post('/search', (req, res) => {
    res.send(req.body);
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});