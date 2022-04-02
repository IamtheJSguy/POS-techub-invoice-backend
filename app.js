const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const environment = require('dotenv');
const cors = require('cors');

environment.config();

const Routes = require('./Routes');
const SuperAdmin = require('./App/SuperAdmin/routes');

const sendInvoice = require('./Jobs/sendInvoice')

const adminVerification = require('./Functions/Middlewares').adminAuthentication;
const bullBoardUI = require('bull-board').UI;

const app = express();
app.options('*', cors());
app.use(cors());
const connectMongo = async() => {
    await mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    });
}
connectMongo();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/api/admins', Routes.admins);
app.use('/api/bookings', Routes.bookings);
app.use('/api/buildings', Routes.buildings);
app.use('/api/configurations', Routes.configurations);
app.use('/api/companies', Routes.companies);
app.use('/api/employees', Routes.employees);
app.use('/api/floors', Routes.floors);
app.use('/api/invoices', Routes.invoices);
app.use('/api/rooms', Routes.rooms);
app.use('/api/users', Routes.users);
// app.use('/admin/schedule', adminVerification, bullBoardUI);
app.use('/admin', SuperAdmin);

sendInvoice();

const http = require('http').Server(app);

http.listen(process.env.PORT || 4000, () => console.log(`Listening on port: ${process.env.PORT || 4000}`));