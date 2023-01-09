import React, { Component } from 'react';
import joi from 'joi';
import Input from './Input';
import Button from '@material-ui/core/Button';

class Form extends Component {
    state = { data: {}, error: {} };

    validate = () => {
        const schema = joi.object(this.schema);
        const { error } = schema.validate(this.state.data);
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    }

    validProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = joi.object({ [name]: this.schema[name] });
        const { error } = schema.validate(obj);
        return error ? error.details[0].message : null;
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.error };
        const errorMessage = this.validProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;

        this.setState({ data, errors });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit();
    }

    renderInput(name, type = "text", required = true) {
        const { data, error } = this.state;
        return (
            <Input
                name={name}
                // label={label}
                type={type}
                required={required}
                value={data[name]}
                error={error[name]}
                onChange={this.handleChange}
            />
        )
    }

    renderSubmitBtn(name) {
        return (
            <Button
                className='submit_btn'
                type='submit'
                color='primary'
                variant='contained'
            >{name}</Button>
        )
    }
}

export default Form;