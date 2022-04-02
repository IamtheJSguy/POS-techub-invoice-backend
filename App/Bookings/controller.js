const Bookings = require('./model');
const Configuration = require('../Configurations/model');
const Invoices = require('../Invoices/model');
const Users = require('../Users/model');
const invoiceContent = require('../../constant/invoiceContent');

const pdf = require('html-pdf');
// const pdfHtml = require('html-pdf-node');
const sgMail = require('@sendgrid/mail');
const environment = require('dotenv');

const fs = require('fs');

environment.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const pdfOption = {
    format: 'A3',
    margin: {
        top: '10px',
        bottom: '10px',
    },
    displayHeaderFooter: true
}

module.exports = {
    Create: async (req, res) => {
        try {
            let booking = {}, configuration = {}, invoice = {}, user = {}, htmlContent = '', content = null;
            booking = await Bookings.create(req.body);
            configuration = await Configuration.findOne({});
            invoice = await Invoices.create({
                booking: booking.id,
                user: req.body.user,
                netTotal: booking.total + booking.securityCharges
            });
            invoice = await Invoices.findOne({ _id: invoice.id });
            user = await Users.findOne({ _id: req.body.user });
            htmlContent = await invoiceContent(invoice, configuration);
            fs.writeFileSync('invoice.html', htmlContent);
            let html = await fs.readFileSync('invoice.html', 'utf8');

            pdf.create(html, pdfOption).toFile('Invoice.pdf', async (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    content = fs.readFileSync("Invoice.pdf").toString('base64');
                    let contract = fs.readFileSync("contract.pdf").toString('base64');
                    const msg = `Dear User! We at Techub surely needs a good relation with every user working in our co-working space. Collect the invoice and please pay your respected dues on time.`;
                    const emailMessage = {
                        to: user.email,
                        from: process.env.SENDER_EMAIL,
                        subject: 'Tech Hub - Invoice',
                        text: msg,
                        html: msg,
                        attachments: [
                            {
                                filename: 'Invoice.pdf',
                                type: 'application/pdf',
                                disposition: 'attachment',
                                content: content
                            },
                            {
                                filename: 'Contract.pdf',
                                type: 'application/pdf',
                                disposition: 'attachment',
                                content: contract
                            }
                        ]
                    };
                    await sgMail.send(emailMessage);
                }
            });
            return res.status(200).json({
                status: 'Successful',
                message: 'Successfully added a booking',
                data: booking
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    Read: async (req, res) => {
        try {
            const id = req.params.id;
            let booking = {};
            booking = await Bookings.findOne({ _id: id });
            if (!booking) {
                return res.status(200).json({
                    status: 'Failed',
                    message: 'No such booking.'
                });
            } else {
                return res.status(200).json({
                    status: 'Successful',
                    data: booking
                });
            }
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    Update: async (req, res) => {
        try {
            const id = req.params.id;
            let booking = {};
            await Bookings.updateOne({ _id: id }, {
                $set: req.body
            });
            booking = await Bookings.findOne({ _id: id });
            return res.status(200).json({
                status: 'Successful',
                message: 'Booking updated Successfully.',
                data: booking
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    Delete: async (req, res) => {
        try {
            const id = req.params.id;
            await Bookings.updateOne({ _id: id }, {
                $set: {
                    isDeleted: true
                }
            });
            return res.status(200).json({
                status: 'Successful',
                message: 'Booking deleted Successfully.'
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    List: async (req, res) => {
        try {
            let bookings = [];
            bookings = await Bookings.find({ isDeleted: false });
            return res.status(200).json({
                status: 'Successful',
                data: bookings
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    ListByUser: async (req, res) => {
        try {
            let bookings = [];
            bookings = await Bookings.find({
                user: req.params.id,
                isDeleted: false
            });
            return res.status(200).json({
                status: 'Successful',
                data: bookings
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    }
}