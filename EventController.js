const Booking = require("../Model/booking");
const Event = require("../Model/event");

// add
exports.EventController = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    const tickets = req.body.tickets;
    if (tickets > event.availabelTickets) {
      return res.status(400).json({
        success: false,
        message: "Not enough tickets avilable",
      });
    }
    event.availabelTickets -= tickets;
    await event.save();
    const booking = new Booking({
      eventId: event._id,
      useraId: req.user._id,
      tickets,
    });
    await booking.save();

    res.status(201).send(booking);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Somthing went wrong",
    });
  }
};

//all data

exports.allEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Somthing went wrong",
    });
  }
};
