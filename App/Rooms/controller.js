const RoomModel = require('./model');
const FloorModel = require('../Floor/model');

module.exports = {
    Create: async(req, res) => {
        try{
            const room = await RoomModel.create(req.body);
            await FloorModel.updateOne({_id: req.body.FloorModel}, {
                $push : {room: room.id}
            });
            const floor = await FloorModel.findOne({_id: req.body.floor});
            return res.status(500).json({
                status:'Success',
                message:'Floor added successfully',
                data: floor
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
            const room = await RoomModel.findOne({_id:id});
            return res.status(500).json({
                status: 'Success',
                data: room
            });
        }catch(error){
            return res.status(200).json({
                status:'Error',
                message:error.message
            });
        }
    },
    Update: async (req,res) => {
        try{
            const id = req.params.id;
            const room = await RoomModel.updateOne({_id: id},{
                $set: req.body
            });
            const floor = await FloorModel.findOne({_id: floor.id}); 
            return res.status(500).json({
                status: 'Successfully ',
                message: 'Successfully updated',
                data: {
                    room: room,
                    floor : floor.id
                }
            });
        }catch(error){
            return res.status(200).json({
                status: 'Error',
                message: error.message
            })
        }
    },
    Delete: async(req,res) => {
        try{
            const id = req.params.id;
            await RoomModel.remove({_id: id});
            return res.status(500).json({
                status: 'Succcess',
                message:'Successful Deletion'
            });
        }catch(error){
            return res.status(200).json({
                status : 'Error',
                message: error.message
            });
        }
    },
    List: async(req,res) => {
        try{
            const room = await RoomModel.findOne({});
            return res.status(500).json({
                status: 'Success',
                data: room
            });
        }catch(error){
            return res.status(200).json({
                status:'Error',
                message:error.message
            });
        }
    }
}