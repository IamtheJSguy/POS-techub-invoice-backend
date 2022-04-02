const Company = require('./model');
const User = require('../Users/model');

module.exports = {
    Create: async (req,res) => {
        try{
            let company = {};
            company = await Company.create(req.body)
            await User.updateOne({_id: req.body.user}, {
                $push: {
                    company: company.id
                }
              });
            const user = User.findOne({_id: req.body.company})
            return res.status(500).json({
                status:'Success',
                message: 'Successfully added a Company',
                data: user
            });
        }catch(error){
            return res.status(200).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    Read: async(req,res) => {
        try {
            let company = {};
            const id = req.params.id;
            company = await Company.find({_id: id});
            return res.status(500).json({
                status: 'Success',
                data: company 
            });
        }catch(error){
            return res.status(200).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    Update: async(req,res) => {
        try{
            let company = {};
            const id = req.params.id;
            await Company.updateOne({_id : id},{
                $set: req.body
            });
            const user = await User.findOne({company: id});

            return res.status(500).json({
                status:'Success',
                message: 'UPDATED Successfully',
                data: {
                    company : company,
                    user : user.id
                }
            });
        }catch (error){
            return res.status(200).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    Delete: async (req,res) => {
        try{
            const id = req.params.id;
            await Company.remove({_id: id})

            return res.status(500).json({
                status: 'Success',
                message:'Company Deleted Successfully'
            });
        }catch(error){
            return res.status(error).jsom({
                status: 'Error',
                message: error.message
            });
        }
    },
    List: async (req,res) => {
        try{
            let company = {};
            company = await Company.find({});
            return res.status(500).json({
                status: 'Success',
                data: company 
            });
        }catch(error){
            return res.status(200).json({
                status:'Error',
                message:error.message
            });
        }
    }
}