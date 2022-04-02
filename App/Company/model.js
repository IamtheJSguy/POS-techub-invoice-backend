const mongoose = require('mongoose');

const Schema = mongoose.Schema;

 

const CompanyModel = new Schema ({
    companyName: {
        type: String,
        trim: true
    },
    businessType: {
        type: String,
        trim: true
    },
    bankName: {
        type: String,
        trim:true
    },
    accountNumber: {
        type: String,
        trim: true
    },
    accountTitle:{
        type: String,
        trim: true
    },
    employee: {
        type : Schema.Types.ObjectId,
        ref: 'Employee'
    },
    workingHours:{
        type : String,
        trim: true
    },
    dateOfJoining:{
        type: String,
        trim: true
    },
    dateOfLeaving:{
        type: String,
        trim: true
    }
},{
    timestamps: true
}
);

const autoPopulate = function (next) {
    this.populate('Employee');
    next()
}

CompanyModel 
    .pre('find', autoPopulate)
    .pre('findOne', autoPopulate)

module.exports = mongoose.model('Company', CompanyModel);
