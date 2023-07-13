const mongoose = require("mongoose");

const connection = async (url) => {
  try {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
