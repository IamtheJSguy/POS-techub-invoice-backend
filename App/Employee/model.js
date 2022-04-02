const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const EmployeeModel = new Schema({
    employeeName: {
        type: String,
        trim: true
    },
    employeeCode: {
        type: String,
        trim:true
    },
    designation: {
        type: String,
        trim: true
    },
    policeVerification: {
        type: String,
        trim: true
    },
    cnic: {
        type: String,
        trim: true
    },
    cnicFront: {
        type: String,
        trim: true
    },
    cnicBack: {
        type: String,
        trim: true
    },
    passportSizePicture: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const autoPopulate =  function(next) {
    this.populate('Company');
    next()
}

EmployeeModel
    .pre('find', autoPopulate)
    .pre('findOne' , autoPopulate);

module.exports = module.exports = mongoose.model('Employee', EmployeeModel);