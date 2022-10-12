const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs')
const path = require('path')
const upload = multer();

const app = express();

const port = 3030;

const BookingsController = require('./controllers/bookings');
const connectDB = require('./mongoose');
const createController = require('./utils/create-controller');
const { errorHandler } = require('./utils/error-handling');

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json({
type: ['application/json', 'text/plain']
}))

app.use(errorHandler);

app.get('/api/getBookings', createController(BookingsController.getBookings));
app.post('/api/createBooking', createController(BookingsController.createBooking));


app.get(['*', '/*'], (req, res) => {
    res.send('Hello World!')
});

(async () => {
    await connectDB();

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });
})();
