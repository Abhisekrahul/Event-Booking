const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return (next.password = await bcrypt.hash(this.password, 10));
    next();
  }
});
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};
userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this.id }, process.env.JWT_SECRET);
};

module.exports = mongoose.model("User", userSchema);
