const EmployeeService = require("../services/employeeService");
const TaxService = require("../services/taxService");
const update = async (req, res) => {
    try {
        const user = await EmployeeService.update(req.body);
        return res.status(200).json({
            message: "Successfully updated emplpyee",
            success: true,
            data: user
        })
    } catch (err) {
        return res.status(500).json({
            message: "something went wrong",
            success: false,
            data: {}
        })
    }
}

const caclulateTax = async (req, res) => {
    try {
        const employee = await EmployeeService.getEmployee(req.params.id);
        const tax = await TaxService.calculateTax(employee.salary);
        return res.status(200).json({
            message: "Successfully fetched tax",
            success: true,
            data: tax
        })
    } catch (err) {
        return res.status(500).json({
            message: "something went wrong",
            success: false,
            data: {}
        })
    }
}

module.exports = {
    update,
    caclulateTax
}