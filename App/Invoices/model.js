const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Reference = Schema.Types.ObjectId;

const InvoiceModel = new Schema({
    user: {
        type: Reference,
        ref: 'User'
    },
    booking: {
        type: Reference,
        ref: 'Booking'
    },
    month: {
        type: String,
        trim: true
    },
    paidAmount: {
        type: Number
    },
    leftAmount: {
        type: Number,
        default: 0
    },
    arrears: {
        type: Number,
        default: 0
    },
    netTotal: {
        type: Number
    },
    status: {
        type: String,
        enum: ['Paid', 'Unpaid'],
        default: 'Unpaid'
    }
}, {
    timestamps: true
});

const autoPopulate = function ( next ) {
    this.populate('user');
    this.populate('booking');
    next();
}

InvoiceModel
    .pre('find', autoPopulate)
    .pre('findOne', autoPopulate)

module.exports = mongoose.model('Invoice', InvoiceModel);