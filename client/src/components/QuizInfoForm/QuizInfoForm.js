import React, { Component } from 'react';

import {
    Typography,
    FormGroup, TextField, FormControl, FormHelperText
} from '@material-ui/core';

export default class QuizInfoForm extends Component {
    render() {
        const {
            title = 'General Info',
            name = '',
            nameError = false,
            description = ''
        } = this.props;
        return (
            <form noValidate autoComplete="off" onSubmit={this.handeleSubmit}>
                <Typography variant={'h5'}>{title}</Typography>
                <FormGroup component={'fieldset'}>
                    <FormControl error={nameError}>
                        <TextField
                            error={nameError}
                            label={'Name'}
                            required
                            margin="normal"
                            variant="outlined"
                            value={name}
                            onChange={this.handleChange('name')}
                        />
                        {nameError && (<FormHelperText>Quiz name is required</FormHelperText>)}
                    </FormControl>
                    <FormControl>
                        <TextField
                            multiline
                            rows={3}
                            label="Description"
                            placeholder={'Short description'}
                            margin="normal"
                            variant="outlined"
                            value={description}
                            onChange={this.handleChange('description')}
                        />
                    </FormControl>
                    
                </FormGroup>
           </form>
        );
    }

    handleChange = (name) => (event) => {
        this.props.onChange(name, event.target.value);
    }

    handeleSubmit = (event) => {
        event.preventDefault();
    }
}