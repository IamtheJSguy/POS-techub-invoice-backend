const BuildingModel = require('./model');


module.exports = {
    Create: async(req, res) => {
        try{
            let building = {};
            building = await BuildingModel.create(req.body);
            return res.status(200).json({
                status: 'Successful',
                message: 'Successfully added a building',
                data: building            
        });
        }catch(error){
            return res.status(400).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    Read: async(req, res) => {
        try {
            let building = {};
            const id = req.params.id;
            user = await BuildingModel.findOne({ _id: id });
            return res.status(200).json({
                status: 'Successful',
                data: user
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    Update: async(req,res) => {
        try{
            let building = {};
            let id = req.params.id;
            await BuildingModel.updateOne({_id: id}, {
                $set: req.body
            });
            building = await BuildingModel.findOne({_id: id});
            return res.status(200).json({
                status: 'Success',
                message: 'Successfully updated building',
                data: building
            });
        }catch(error){
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        } 
    },
    Delete: async(req, res) => {
        try {
            const id = req.params.id;
            await BuildingModel.updateOne({ _id: id }, {
                $set: {
                    isDeleted: true
                }
            });
            return res.status(200).json({
                status: 'Successful',
                message: 'Successfully Deleted user'
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    List: async(req, res) => {
        try {
            let buildings = [];
            buildings = await BuildingModel.find({ isDeleted: false });
            return res.status(200).json({
                status: 'Successful',
                data: buildings
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    } 
}