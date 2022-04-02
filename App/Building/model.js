const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Reference = Schema.Types.ObjectId;

const BuildingModel = new Schema ({
   
   buildingName: {
       type: String,
       trim:true
   },
   floor: [{
       type: Reference,
       ref: 'Floor'
   }],
   address:{
       type: String,
       trim: true
   },
   rent: {
       type : String,
       trim: true
   },
   isDeleted: {
       type: Boolean,
       default: false
   }
},{
    timestamps : true
}
);

const autoPopulate = function (next) {
    this.populate('Floor');
    next()
}

BuildingModel 
    .pre('find', autoPopulate)
    .pre('findOne', autoPopulate)

module.exports = mongoose.model('Building', BuildingModel)