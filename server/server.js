const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const app = express();
const find = require("lodash/find");

// Top Level middleware
app.use(cors());
app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());

// Make fake database of users
let fakeDatabase = [];

const getFakeDatabaseData = () => {
  axios
    .get("https://randomuser.me/api/?results=100")
    .then((response) => {
      const users = response.data.results;
      const mapUsers = users.map((user, index) => {
        return {
          id: index,
          key: index,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          city: user.location.city,
          country: user.location.country,
          address: `${user.location.street.number} ${user.location.street.name}`,
          postcode: user.location.postcode,
          picture: user.picture.medium,
          phone: user.phone,
          dob: user.dob.date,
        };
      });
      console.log({ mapUsers });
      fakeDatabase = [...mapUsers];
    })
    .catch((error) => {
      console.log(error);
    });
};
getFakeDatabaseData();

// Endpoints
app.get("/api/users", (req, res) => {
  res.status(200).send(fakeDatabase);
});

app.get("/api/user", (req, res) => {
  console.log(req);
  const id = req.body.id;
  const user = find(fakeDatabase, { id: id });
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(200).send({ error: "could not find user" });
  }
});

app.listen(3006, () => console.log(`server running on port: ${3006}`));
