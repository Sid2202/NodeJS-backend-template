const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const Router = require("./routes")
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config()

const port = 5080;
const uri = process.env.MONGO_URI
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully to database");
});

app.use(Router);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});