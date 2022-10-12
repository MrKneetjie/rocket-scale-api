const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    type: String,
    title: String,
    description: String,
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = { Booking };
