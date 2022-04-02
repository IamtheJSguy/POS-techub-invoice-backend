const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ConfigurationSchema = new Schema({    
    
    ownerName: {
        type: String,
        trim: true
    },
    mobileNo: {
        type: String,
        trim: true
    },
    
    rent: {
        type: String,
        trim: true
    },
    contract: {
        type: String,
        trim: true
    },
    bankName: {
        type: String,
        trim: true
    },
    accountTitle: {
        type: String,
        trim: true
    },
    accountNumber: {
        type: String,
        trim: true
    },
    ntn:{
        type:String,
        trim:true
    }
}, { timestamps: true });

module.exports = mongoose.model('Configuration', ConfigurationSchema);