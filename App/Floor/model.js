const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Reference = Schema.Types.ObjectId;

const FloorModel = new Schema({
    floorNo: {
        type: String,
        trim: true
    },
    rooms: [{
        type: Reference,
        ref: 'Room'
    }],
    dedicatedSeats: {
        type: String,
        trim: true
    }
},{
    timestamps: true
}
);

const autoPopulate = function(next) {
    this.populate('Room');
    next()
}

FloorModel 
    .pre('find', autoPopulate)
    .pre('findOne', autoPopulate)

module.exports = module.exports = mongoose.model('Floor', FloorModel);