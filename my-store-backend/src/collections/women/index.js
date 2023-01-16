const express = require("express");
const { womenService } = require("../../services/INDEX.JS");

const routes = express.Router();
const women = () => {
  routes.get("/", womenService);
  return routes;
};

module.exports = {
  women,
};
