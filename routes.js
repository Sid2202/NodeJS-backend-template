const express = require("express");
const formModel = require("./models");
const cors = require("cors");
const app = express();

app.use(cors())
// app.use(bodyParser.json());

app.post("/add_user", async (request, response) => {
    const data = request.body
    const formData = new formModel({
        name: data.name,
        email: data.email,
        age: data.age,
        phrase: data.phrase
    });
    console.log(formData);

    try {
      await formData.save();
      response.send(formData);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/getdata", async (request, response) => {
    const data = await formModel.find({});
  
    try {
      response.send(data);
    } catch (error) {
      response.status(500).send(error);
    }
  });

module.exports = app;