const express = require("express");
const router = express.Router();
const Reminder = require("../models/Reminder");

// POST /api/reminders
router.post("/", async (req, res) => {
  const { date, time, message, type } = req.body;

  // Input Validation
  if (!date || !time || !message || !type) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newReminder = new Reminder({ date, time, message, type });
    await newReminder.save();
    res.status(201).json({ message: "Reminder created", data: newReminder });
  } catch (err) {
    res.status(500).json({ error: "Server Error", details: err.message });
  }
});

module.exports = router;
