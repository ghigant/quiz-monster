import React from 'react';
import {reduxForm, Field} from 'redux-form';

import {FormControl, FormLabel } from '@material-ui/core';

import TextFieldRederer from './TextField';
import CodeEditorField from './CodeEditorField';

import MUIQuestionForm from './MUIQuestionForm';
export default (props) => <MUIQuestionForm {...props}/>;

const StatefulQuestionForm = (props) => {
    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <FormControl component="fieldset" fullWidth>
                <FormLabel>Question</FormLabel>
                <FormControl>
                    <Field
                        name="text"
                        component={TextFieldRederer}
                        label="Text"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Code</FormLabel>
                    <Field
                        name="code"
                        component={CodeEditorField}
                    />
                </FormControl>
            </FormControl>
            <FormControl component="fieldset" fullWidth>
                <FormLabel>Answers</FormLabel>
                <Field
                    name="a"
                    component={TextFieldRederer}
                    label="Answer"
                />
            </FormControl>

        </form>
    );
}

const validate = (values) => {
    const errors = {};
    console.log(values);
    
    ['text'].forEach(key => {
        if (!values[key]) {
            errors[key] = 'Required'
        }
    })
};

export const QuestionForm = reduxForm({
    form: 'QuestionForm', // a unique identifier for this form
    validate
  })(StatefulQuestionForm)