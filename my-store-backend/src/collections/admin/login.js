const express = require("express");
const { userLogin } = require("../../services/INDEX.JS");
const routes = express.Router();

// module.exports = () => {
//   routes.post("/login", adminLogin);
//     return routes;
//     console.log(object)
// };

const login = () => {
  routes.post("/", userLogin);
  return routes;
};

module.exports = {
  login,
};
