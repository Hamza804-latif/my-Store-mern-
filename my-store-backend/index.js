const express = require("express");
const router = require("./src/collections/index.js");
const cors = require("cors");
const database = require("./src/database");

const app = express();
const PORT = 5000;

const NodeServer = async () => {
  await database();
  app.use(express.json());
  app.use(cors());
  app.use(router());
  try {
    app.listen(PORT, () => {
      console.log("server is live...");
    });
  } catch (err) {
    console.log(err);
  }
};
NodeServer();
