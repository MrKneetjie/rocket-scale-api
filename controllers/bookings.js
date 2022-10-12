const snoowrap = require('snoowrap');
const { Booking } = require('../models/bookings');

const getBookings = async (req, res) => {
    const bookings = await Booking.find({});

    res.send(bookings);
};

const createBooking = async (req, res) => {
    try {
        const newBooking = new Booking({
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            title: req.body.title,
            description: req.body.description,
        });
        
        await newBooking.save();
        res.status(200).send("Booked");
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
};


module.exports = {
    getBookings,
    createBooking,
};