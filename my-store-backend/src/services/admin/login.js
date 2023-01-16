// const jwt = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

const jwtkey = "secretkey12345";

module.exports = (req, resp) => {
  let { email, password } = JSON.parse(req.body.data);
  console.log(email);
  if (email == "admin@admin.com" && password == "admin") {
    try {
      let token = jwt.sign({ email, password }, jwtkey);
      resp.status(200).json({ status: 200, result: "Login Successful", token });
    } catch (err) {
      resp.status(500).json({ status: 400, message: err.message });
    }
  } else {
    resp.status(401).json({
      status: 401,
      message: "token is not valid or username/password is incorrect",
    });
  }
};
