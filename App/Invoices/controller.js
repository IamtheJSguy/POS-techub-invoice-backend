const Invoices = require('./model');

module.exports = {
    Create: async (req, res) => {
        try {
            let invoice = {};
            invoice = await Invoices.create(req.body);
            return res.status(200).json({
                status: 'Successful',
                message: 'Successfully added an invoice',
                data: invoice
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
            const id = req.params.id;
            let invoice = {};
            invoice = await Invoices.findOne({_id: id});
            if (!invoice) {
                return res.status(200).json({
                    status: 'Failed',
                    message: 'No such invoice.'
                });
            } else {
                return res.status(200).json({
                    status: 'Successful',
                    data: invoice
                });
            }
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
            let invoice = {};
            await Invoices.updateOne({_id: id}, {
                $set: req.body
            });
            invoice = await Invoices.findOne({_id: id});
            return res.status(200).json({
                status: 'Successful',
                message: 'Invoice updated Successfully.',
                data: invoice
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
            let invoices = [];
            await Invoices.deleteOne({_id: id});
            invoices = await Invoices.find({user: req.decoded._id});
            return res.status(200).json({
                status: 'Successful',
                message: 'Invoice deleted Successfully.',
                data: invoices
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
            let invoices = [];
            invoices = await Invoices.find({});
            return res.status(200).json({
                status: 'Successful',
                data: invoices
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    ListByUser: async (req, res) => {
        try {
            let invoices = [];
            invoices = await Invoices.find({user: req.params.id});
            return res.status(200).json({
                status: 'Successful',
                data: invoices
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    }
}