const Configurations = require('./model');

module.exports = {
    Create: async (req, res) => {
        try {
            let configuration = {}, configurations = [];
            configurations = await Configurations.find({});
            if (configurations.length > 0) {
                await Configurations.updateOne({_id: configurations[0].id}, {
                    $set: req.body
                });
                configuration = await Configurations.findOne({_id: configurations[0].id});
            } else {
                configuration = await Configurations.create(req.body);
            }
            return res.status(200).json({
                status: true,
                message: 'Successfully added a configuration',
                data: configuration
            });
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            });
        }
    },
    Read: async (req, res) => {
        try {
            const id = req.params.id;
            let configuration = {};
            configuration = await Configurations.findOne({_id: id});
            if (!configuration) {
                return res.status(200).json({
                    status: 'Failed',
                    message: 'No such configuration.'
                });
            } else {
                return res.status(200).json({
                    status: true,
                    data: configuration
                });
            }
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            });
        }
    },
    Update: async (req, res) => {
        try {
            const id = req.params.id;
            let configuration = {};
            await Configurations.updateOne({_id: id}, {
                $set: req.body
            });
            configuration = await Configurations.findOne({_id: id});
            return res.status(200).json({
                status: true,
                message: 'Configuration updated Successfully.',
                data: configuration
            });
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            });
        }
    },
    Delete: async (req, res) => {
        try {
            const id = req.params.id;
            let configurations = [];
            await Configurations.deleteOne({_id: id});
            configurations = await Configurations.find({user: req.decoded._id});
            return res.status(200).json({
                status: true,
                message: 'Configuration deleted Successfully.',
                data: configurations
            });
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            });
        }
    },
    List: async (req, res) => {
        try {
            let configurations = [];
            configurations = await Configurations.find({});
            return res.status(200).json({
                status: true,
                data: configurations
            });
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            });
        }
    }
}