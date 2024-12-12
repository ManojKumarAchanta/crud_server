const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to MONGODB");
  } catch (e) {
    console.log(e);
  }
};
module.exports = connectToDB;
