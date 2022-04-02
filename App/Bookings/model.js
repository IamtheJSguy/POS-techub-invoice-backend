const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Reference = Schema.Types.ObjectId;

const BookingModel = new Schema({
    user: {
        type: Reference,
        ref: 'User'
    },
    type: {
        type: String,
        enum: ['Sharing', 'Dedicated', 'Private Room'],
        default: 'Private Room'
    },
    seats: {
        type: Number
    },
    roomNumber: [{
        type: String,
        trim: true
    }],
    shift: {
        type: String,
        enum: ['Day', 'Night', 'Both']
    },
    baseRate: {
        type: Number
    },
    discount: {
        type: Number
    },
    singleChairAmount: {
        type: String,
        trim: true
    },
    total: {
        type: Number
    },
    businessName: {
        type: String,
        trim: true
    },
    employeeCardPaymentPaid: {
        type: String,
        enum: ['Paid', 'Unpaid'],
        default: 'Unpaid'
    },
    employeeCardChargesTotal: {
        type: Number
    },
    securityCharges: {
        type: Number
    },
    securityPaid: {
        type: String,
        enum: ['Paid', 'Unpaid'],
        default: 'Unpaid'
    },
    address: {
        type: String,
        trim: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const autoPopulate = function ( next ) {
    this.populate('user');
    next();
}

BookingModel
    .pre('find', autoPopulate)
    .pre('findOne', autoPopulate)

module.exports = mongoose.model('Booking', BookingModel);