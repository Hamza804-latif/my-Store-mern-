const mongoose = require("mongoose");
const users = require("../../database/Schema/user");
module.exports = async (req, resp) => {
  let { username, email, password } = req?.body?.data;
  if (username && email && password) {
    try {
      let checkUser = await users.findOne({ email });
      let check = Boolean(checkUser);
      console.log("hgj", check);
      if (!checkUser) {
        let createUser = new users({
          _id: mongoose.Types.ObjectId(),
          username,
          email,
          password,
        });
        let result = await createUser.save();
        resp
          .status(201)
          .json({ status: 200, message: "Registerd Successfully!" });
      } else {
        resp
          .status(401)
          .json({ status: 401, message: "Email already existed" });
      }
    } catch (err) {
      resp.status(502).json({ message: `internal server error ${err}` });
    }
  } else {
    resp.status(400).json({ message: "bad request please send valid data" });
  }
};
