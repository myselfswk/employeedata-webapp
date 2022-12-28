const router = require('express').Router();
const { Employee, validator } = require('../models/employee');
const validate = require('../middleware/validate');
const isObjectValidId = require('../middleware/isObjectValidId');
const asyncHandler = require('../middleware/asyncHandler');

// Create employee
router.post('/', validate(validator), asyncHandler(async (req, res) => {
    await Employee(req.body).save();
    res.status(200).send("Employee Created Successfully");
}));

// Get All Employee
router.get('/', asyncHandler(async (req, res) => {
    const employees = await Employee.find();
    res.send(employees);
}));

// Get Employee ID
router.get('/:id', isObjectValidId, asyncHandler(async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.send(employee);
}));

// Update Employee Details by ID
router.put('/:id', [validate(validator), isObjectValidId], asyncHandler(async (req, res) => {
    await Employee.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).send("Employee Updated Successfully");
}));

// Delete Employee Details by ID
router.delete('/:id', isObjectValidId, asyncHandler(async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200).send("Employee Deleted Successfuly");
}));

module.exports = router;