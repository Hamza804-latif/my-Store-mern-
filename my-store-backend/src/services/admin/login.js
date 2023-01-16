// const jwt = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const users = require("../../database/Schema/user");

const jwtkey = "secretkey12345";

module.exports = async (req, resp) => {
  if (req.body.data) {
    let { email, password } = req?.body?.data;
    try {
      let user = await users.findOne({ email, password }).select("-password");
      if (user) {
        let token = jwt.sign({ email }, jwtkey);
        resp
          .status(200)
          .json({ status: 200, result: "Login Successful", token });
      } else {
        resp.status(401).json({
          status: 401,
          message: "username/password is incorrect",
        });
      }
    } catch (err) {
      resp.status(500).json({ status: 500, message: "internal server error" });
    }
  } else {
    resp.status(401).json({ status: 401, message: "some error occured" });
  }
};
