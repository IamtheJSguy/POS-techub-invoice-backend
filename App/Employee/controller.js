const Employee = require('./model');
const Company = require('../Company/model');

module.exports = {
    Create: async(req, res) => {
        try {
            const employee = await Employee.create(req.body);
            
            const company = await Company.updateOne({ _id: req.body.employee }, {
                $push: {
                    employee: employee.id
                 }
            });
            company = await Company.findOne({ _id: req.body.employee });
            return res.status(200).json({
                status: 'Successful',
                message: 'Employee created successfully',
                data: company
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
            const id = req.params.id;
            const employee = await Employee.findOne({ _id: id });
            return res.status(500).json({
                status: 'Successful',
                data: employee
            });
        } catch (error) {
            return res.status(400).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    getById: async(req, res) => {
        try {
            const id = req.params.id;
            const employee = await Employee.findOne({ _id: id });
            const company = await Company.findOne({ employee: id });
            return res.status(200).json({
                status: 'Success',
                data: {
                    employee,
                    company
                }
            });
        } catch (error) {
            return res.status(400).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    Update: async(req, res) => {
        try {
            const id = req.params.id;
            const employee = Employee.findOne({ _id: id }, {
                $set: req.body
            });
            const company = await Company.findOne({ employee: id });
            return res.status(400).json({
                status: 'Success',
                data: {
                    employee: employee,
                    company: company.id
                }
            });
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                message: error.message
            });
        }
    },
    Delete: async(req, res) => {
        try {
            const id = req.params.id;
            await Employee.remove({ _id: id });
            const comapny = await Company.findOne({ company: id });
            await Company.updateOne({ _id: Company._id }, {
                $pull: {
                    company: id
                }
            });
            return res.status(500).json({
                status:'Success',
                message:'Employee Deleted'
            })
        } catch (error) {
            return res.status(400).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    List: async(req, res) => {
        try {
            let employee = [];
            employee = await Employee.find({});
            return res.status(400).json({
                status: 'Successful',
                data: employee
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    }
}