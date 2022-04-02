const admins = require('../App/Admins/routes');
const bookings = require('../App/Bookings/routes');
const configurations = require('../App/Configurations/routes');
const invoices = require('../App/Invoices/routes');
const users = require('../App/Users/routes');
const companies = require('../App/Company/routes');
const employees = require('../App/Employee/router');
const buildings = require('../App/Building/routes');
const floors = require('../App/Floor/routes');
const rooms = require('../App/Rooms/routes');

module.exports = {
    admins,
    bookings,
    buildings,
    employees,
    configurations,
    companies,
    invoices,
    floors,
    rooms,
    users,
}