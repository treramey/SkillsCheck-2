require("dotenv").config();
const express = require("express");
const massive = require("massive");
const app = express();
const c = require("./controller/controller");

app.use(express.json());
const { SERVER_PORT, CONENCTION_STRING } = process.env;

massive({
  connectionString: CONENCTION_STRING,
  ssl: { rejectUnauthorized: false }
})
  .then(db => {
    app.set("db", db);
    console.log("We have hit the database 🛰️");
    app.listen(SERVER_PORT, () => {
      console.log(`The Server is running on port ${SERVER_PORT}✅`);
    });
  })
  .catch(err => {
    console.log(`Server Did NOT Connect ❌ ${err}`);
  });

app.get("/api/inventory", c.getInventory); //checked
app.get("/api/inventory/:id", c.getOneInventory); //checked
app.post("/api/inventory", c.addInventory); //checked
app.delete("/api/inventory/:id", c.delete); //checked
