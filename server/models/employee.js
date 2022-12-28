const mongoose = require('mongoose');
const joi = require('joi');

// Create Employee Schema
const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    }
});

const Employee = mongoose.model("employee", employeeSchema);

const validator = (data) => {
    const schema = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        mobile: joi.string().length(11).regex(/^\d+$/).message({
            "string.pattern.base": "Please Enter Valid Mobile Number"
        }).required()
    })

    // Compare and validate our schema with our data
    return schema.validate(data)
}

module.exports = {
    Employee,
    validator
}