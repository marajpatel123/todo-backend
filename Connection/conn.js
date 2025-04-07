const mongoose = require("mongoose");
require("dotenv").config(); // make sure this is here

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error in MongoDB connection:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
