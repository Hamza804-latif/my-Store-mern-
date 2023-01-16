const express = require("express");
const { userSignup } = require("../../services");

const routes = express.Router();
const signup = () => {
  routes.post("/", userSignup);

  return routes;
};

module.exports = {
  signup,
};
