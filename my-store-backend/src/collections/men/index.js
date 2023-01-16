const express = require("express");
const routes = express.Router();
const { menService } = require("../../services/INDEX.JS");

const men = () => {
  routes.get("/", menService);
  return routes;
};

module.exports = {
  men,
};
