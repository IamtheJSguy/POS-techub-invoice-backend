const Bookings = require('../App/Bookings/model');
const Configurations = require('../App/Configurations/model');
const Invoices = require('../App/Invoices/model');

const Queue = require('bull');
// const setQueues = require('bull-board').setQueues;

const sgMail = require('@sendgrid/mail');

const environment = require('dotenv');
environment.config();

const redisOptions = require('../constant/redisConnection');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const invoiceContent = require('../constant/invoiceContent');

const pdf = require('html-pdf');
const fs = require('fs');

const moment = require('moment')

const pdfOption = {
    format: 'A3',
    margin: {
        top: '10px',
        bottom: '10px',
    },
    displayHeaderFooter: true
}

const invoiceEmailQueue = new Queue('InvoiceEmail', redisOptions);
// setQueues([invoiceEmailQueue]);


invoiceEmailQueue.process(async (job, done) => {
    try {
        let firstDay = moment().isSame(moment().startOf('month'), 'day')
        if (firstDay) {
            let bookings = [], previousInvoice = {}, configuration = {};
            bookings = await Bookings.find({});
            configuration = await Configurations.findOne({});
            for (const booking of bookings) {
                previousInvoice = await Invoices.findOne({ user: booking.user._id }).sort({ createdAt: -1 });
                const invoice = await Invoices.create({
                    user: booking.user._id,
                    booking: booking._id,
                    netTotal: booking.total + previousInvoice.leftAmount,
                    arrears: previousInvoice.leftAmount
                });
                htmlContent = await invoiceContent(invoice, configuration);
                fs.writeFileSync('invoice.html', htmlContent);
                let html = await fs.readFileSync('invoice.html', 'utf8');

                pdf.create(html, pdfOption).toFile('Invoice.pdf', async (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        content = fs.readFileSync("Invoice.pdf").toString('base64');
                        const msg = `Dear User! We at Techub surely needs a good relation with every user working in our co-working space. Collect the invoice and please pay your respected dues on time.`;
                        const emailMessage = {
                            to: booking.user.email,
                            from: process.env.SENDER_EMAIL,
                            subject: 'Tech Hub - Invoice',
                            text: msg,
                            html: msg,
                            attachments: [{
                                filename: 'Invoice.pdf',
                                type: 'application/pdf',
                                disposition: 'attachment',
                                content: content
                            }]
                        };
                        await sgMail.send(emailMessage);
                    }
                });
            }
        }
    } catch (error) {
        console.log(error)
    }
    done();
});

module.exports = async () => {
    try {
        await invoiceEmailQueue.add({}, { repeat: { cron: '0 0 1 * *' } });
    } catch (error) {
        console.log(error);
    }
}