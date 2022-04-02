const Users = require('./model');


module.exports = {
    Create: async(req, res) => {
        try {
            let user = {};
            user = await Users.create(req.body);
            return res.status(200).json({
                status: 'Successful',
                message: 'Successfully registered a user',
                data: user
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    Read: async(req, res) => {
        try {
            let user = {};
            const id = req.params.id;
            user = await Users.findOne({ _id: id }, { password: 0 });
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
    Update: async(req, res) => {
        try {
            let user = {};
            const id = req.params.id;
            await Users.updateOne({ _id: id }, {
                $set: req.body
            });
            user = await Users.findOne({ _id: id });
            return res.status(200).json({
                status: 'Successful',
                message: 'Successfully updated user',
                data: user
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    Delete: async(req, res) => {
        try {
            const id = req.params.id;
            await Users.updateOne({ _id: id }, {
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
            let users = [];
            users = await Users.find({ isDeleted: false });
            return res.status(200).json({
                status: 'Successful',
                data: users
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    }
}