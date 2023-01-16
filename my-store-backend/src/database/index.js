const mongoose = require("mongoose");
require("dotenv").config();

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {}, () => {
      console.log("Database Connected");
    });
  } catch (err) {
    console.log("Some error occured", err);
  }
};
