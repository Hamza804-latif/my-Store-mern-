const express = require("express");
const { login } = require("./admin/login");
const { women } = require("./women");
const { men } = require("./men");
const { signup } = require("./signup");

const routes = express.Router();

module.exports = () => {
  routes.use("/login", login());
  routes.use("/signup", signup());
  routes.use("/women", women());
  routes.use("/men", men());

  return routes;
};
