require("dotenv").config();
const express = require("express");
const massive = require("massive");
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const pc = require("./products_controller");

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.use(express.json());

app.get("/api/products", pc.getAll);
app.get("/api/products/:id", pc.getOne);
app.put("/api/products/:id", pc.update);
app.post("/api/products", pc.create);
app.delete("/api/products/:id", pc.delete);

app.listen(SERVER_PORT, () =>
  console.log(`Server listening from ${SERVER_PORT}`)
);
