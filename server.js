const express = require("express");
const app = express();
require("dotenv").config();

//middleware
app.use(express.json());

//Routes connect

const upload = require("./Router/eventRoutes");
app.use("/api", upload);

//port number
const Port = process.env.PORT || 3000;

//database connected

const dataBase = require("./config/data");
dataBase();

app.listen(Port, () => {
  console.log("Server Connected...");
});
