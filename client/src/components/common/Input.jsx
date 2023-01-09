import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = ({ error, ...rest }) => {
    return (
        <React.Fragment>
            {
                error ? (
                    <TextField className='input' variant='outlined' error={true} size="small" helperText={error} {...rest} />
                ) : (
                    <TextField className='input' variant='outlined' color='primary' size="small" {...rest} />
                )
            }
        </React.Fragment>
    )
}

export default Input;