const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();

// Top Level middleware
app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());

// Endpoint
app.get("/api/test", (req, res) => {
  res.status(200).send("Hits");
});

let fakeDataBase = [];

const getFakeDatabaseData = () => {
  axios
    .get("https://randomuser.me/api/?results=5")
    .then((response) => {
      console.log({ data: response.data });
      fakeDataBase = [...response.data.results];
    })
    .catch((error) => {
      console.log(error);
    });
};
getFakeDatabaseData();

app.get("/api/allUsers", (req, res) => {
  res.status(200).send(fakeDataBase);
});

app.listen(3006, () => console.log(`server running on port: ${3006}`));
