const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect('mongodb+srv://david:Mongo001@cluster0.vtaha.mongodb.net/rocketscale?retryWrites=true&w=majority');

        require('./models/bookings');
    }
    catch (err) {
        console.log(err)
    }
};
