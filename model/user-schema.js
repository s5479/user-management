const mongoose = require("mongoose");
// import autoIncrement from "mongoose-auto-increment";
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, "user");

const user = mongoose.model("user", userSchema);

module.exports = user;
