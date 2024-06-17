const jwt = require("jsonwebtoken");
const User = require("../Model/user");

const auth = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer", "");
  if (!token) {
    return res.status(401).send("access denied . No token provided");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded._id);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("Invalid token");
  }
};
module.exports = auth;
