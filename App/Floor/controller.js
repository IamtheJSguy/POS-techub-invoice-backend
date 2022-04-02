const FloorModel = require('./model');
const BuildingModel = require('../Building/model');

module.exports = {
    Create: async(req,res) => {
        try{
            const floor = await FloorModel.create(req.body);
            await BuildingModel.updateOne({_id: req.body.BuildingModel}, {
                $push : {floor: floor.id}
            });
            const building = await BuildingModel.findOne({_id: req.body.building});
            return res.status(500).json({
                status:'Success',
                message:'Floor added successfully',
                data: building
            });
        }catch(error){
            res.status(200).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    Read: async(req,res) => {
        try{
            const id = req.params.id;
            const floor = await FloorModel.findOne({_id:id});
            return res.status(500).json({
                status: 'Success',
                data: floor
            });
        }catch(error){
            return res.status(200).json({
                status:'Error',
                message:error.message
            });
        }
    },
    Update: async(req, res) => {
        try{
            const id = req.params.id;
            const floor = await FloorModel.updateOne({_id: id},{
                $set: req.body
            });
            const building = await BuildingModel.findOne({_id: building.id}); 
            return res.status(500).json({
                status: 'Successfully ',
                message: 'Successfully updated',
                data: {
                    floor: floor,
                    building : building.id
                }
            });
        }catch(error){
            res.status(200).json({
                status:'Error',
                message: error.message
            });
        }
    },
    Delete: async(req,res) => {
        try{
            const id = req.params.id;
            await FloorModel.remove({_id : id})
            
            return res.status(500).json({
                status: 'Success',
                message: 'Floor deleted'
            });
        }catch(error){
            return res.status(200).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    List: async (req,res) => {
        try{            
            const floor = await FloorModel.findOne({});
            return res.status(500).json({
                status: 'Success',
                data: floor
            });
        }catch(error){
            return res.status(200).json({
                status:'Error',
                message:error.message
            });
        }
    }
}