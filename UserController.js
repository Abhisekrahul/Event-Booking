const User = require("../Model/user");
const jwt = require("jsonwebtoken");

exports.userController = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({
        success: false,
        message: "Invalid userName and passowrd",
      });
    }

    const token = user.generateAuthToken();
    res.send({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Somthing went wrong",
    });
  }
};
