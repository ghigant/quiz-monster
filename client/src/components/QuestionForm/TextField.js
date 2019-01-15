import React from 'react';
import TextField from '@material-ui/core/TextField';
const TextFieldRederer = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => {
    return (
        <TextField
            required
            fullWidth
            label={label}
            placeholder={label}
            margin="normal"
            variant="outlined"
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    );
};

export default TextFieldRederer;