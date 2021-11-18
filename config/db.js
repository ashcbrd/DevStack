const mongoose = require("mongoose");
require("dotenv").config();
const db = process.env.REACT_APP_MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
