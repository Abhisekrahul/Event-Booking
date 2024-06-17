const express = require("express");
const auth = require("../Middleware.js/auth");
const { EventController, allEvents } = require("../Controller/EventController");
const { userController } = require("../Controller/UserController");
const router = express.Router();

//Evets post
router.post("events/:id/book", auth, EventController);
//event get
router.get("/events", allEvents);

//User
router.post("/login", userController);

module.exports = router;
