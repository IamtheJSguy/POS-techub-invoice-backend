const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoomModel = new Schema ({
    rommNo: {
        type: String,
        trim: true
    },
    seats:[{
        type: String,
        trim: true
    }],
    baseRate:{
        type: String,
        trim: true
    }
},{
    timestamps: true
}
);

const autoPopulate = function(next) {
    this.populate('Floor');
    next()
}

RoomModel 
    .pre('find', autoPopulate)
    .pre('findOne', autoPopulate)

module.exports = module.exports = mongoose.model('Room', RoomModel);