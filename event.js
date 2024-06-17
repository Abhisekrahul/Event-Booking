const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  availabelTickets: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Event", eventSchema);
