require("dotenv").config();
const express = require("express");
const massive = require("massive");
const app = express();

app.use(express.json());
const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () => {
  console.log(`The server is running on port ${SERVER_PORT}✅`);
});
