const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: true },
  googleFormLink: { type: String, required: true },
});

module.exports = mongoose.model('EventGG', eventSchema);
