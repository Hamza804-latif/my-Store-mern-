// const jwt = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

const jwtkey = "secretkey12345";

module.exports = (req, resp) => {
  let { email, password } = JSON.parse(req.body.data);
  console.log(email);
  if (email == "admin@admin.com" && password == "admin") {
    try {
      let token = jwt.sign({ email, password }, jwtkey);
      resp.json({ result: "Login Successful", token });
    } catch (err) {
      resp.json({ message: err.message });
    }
  } else {
    resp.json({
      message: "token is not valid or username/password is incorrect",
    });
  }
};
