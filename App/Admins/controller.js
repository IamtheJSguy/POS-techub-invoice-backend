const AdminUser = require('./model');
const jwt = require('jsonwebtoken');

module.exports = {
    Create: async (req, res) => {
        try {
            let admin = {};
            let token = "";
            admin = await AdminUser.create(req.body);
            token = jwt.sign({ _id: admin.id.toString() },
                process.env.TOKEN_SECRET
            );
            await AdminUser.updateOne({ _id: admin.id }, {
                token: token
            });
            admin.token = token;
            return res.status(200).json({
                status: 'Successful',
                message: 'Successfully registered a adminuser',
                data: admin
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    Login: async (req, res) => {
        try {
            const { email, password } = req.body;
            let adminuser = {};
            adminuser = await AdminUser.findOne({ email: email });
            if (adminuser.email !== email) {
                return res.status(403).json({
                    status: 'Failed',
                    message: 'Incorrect Email/Password'
                });
            }
            const passwordPass = await adminuser.comparePassword(password)
            if (!passwordPass) {
                return res.status(403).json({
                    status: 'Failed',
                    message: 'Incorrect Email/Password'
                });
            }
            adminuser.password = undefined;
            return res.status(200).json({
                status: 'Successful',
                data: adminuser
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    Read: async (req, res) => {
        try {
            let adminuser = {};
            const id = req.params.id;
            adminuser = await AdminUser.findOne({ _id: id }, { password: 0 });
            return res.status(200).json({
                status: 'Successful',
                data: adminuser
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    Update: async (req, res) => {
        try {
            const id = req.params.id;
            adminuser = await AdminUser.findOneAndUpdate({ _id: id }, {
                $set: req.body
            });
            return res.status(200).json({
                status: 'Successful',
                message: 'Successfully updated adminuser',
                data: adminuser
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    Delete: async (req, res) => {
        try {
            const id = req.params.id;
            await AdminUser.remove({ _id: id });
            return res.status(200).json({
                status: 'Successful',
                message: 'Successfully Deleted adminuser'
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    List: async (req, res) => {
        try {
            let adminusers = [];
            adminusers = await AdminUser.find({});
            return res.status(200).json({
                status: 'Successful',
                data: adminusers
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    }
}