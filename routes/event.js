const express = require('express');
const Event = require('../models/Event');
const { protect } = require('../middlewares/auth');
const router = express.Router();

// CREATE
router.post('/', protect, async (req, res) => {
  const { eventName, date, location, googleFormLink } = req.body;
  try {
    const event = await Event.create({ eventName, date, location, googleFormLink });
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ
router.get('/', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// UPDATE
router.put('/:id', protect, async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE
router.delete('/:id', protect, async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
