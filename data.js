const mongoose = require("mongoose");
require("dotenv").config();

const dataBase = async function () {
  mongoose.connect(process.env.MONGOOSE_URL).then(() => {
    console.log("DataBase is connected....");
  });
};
module.exports = dataBase;
