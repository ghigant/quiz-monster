import React, { Component } from 'react';

import CenterContent from '../../../components/CenterContent';
import {
    Stepper,
    Step,
    StepLabel, 
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
    FormGroup,
    TextField,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    OutlinedInput
}from '@material-ui/core';

const steps = [
    'General Info',
    'Questions',
    'Settings',
    'Preview'
];

const stepsContent = [
    (props) => {
       return (
           <form noValidate autoComplete="off">
                <Typography variant={'h5'}>{steps[props.index]}</Typography>
                <FormGroup component={'fieldset'}>
                    <TextField 
                        label={'Name'}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        multiline
                        label="Description"
                        placeholder={'Short description'}
                        margin="normal"
                        variant="outlined"
                    />
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Number"
                                value={props.number}
                                type="number"
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl variant="outlined">
                                <InputLabel>Age</InputLabel>
                                <Select
                                    value={'random'}
                                    input={
                                        <OutlinedInput
                                            labelWidth={32}
                                            name="age"
                                            id="outlined-age-simple"
                                        />
                                    }
                                >
                                    <MenuItem value={'random'}>Random</MenuItem>
                                    <MenuItem value={'manually'}>Manually</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </FormGroup>
           </form>
       )
    },
    (props) => {
        return <h1>{props.title}</h1>
     },
     (props) => {
        return <h1>{props.title}</h1>
     },
     () => {
        return <h1>Preview</h1>
     }

];

class QuizStepper extends Component {
    state = {
        activeStep: 0,
        questionsNumber: 20
    }
    render() {
        const {activeStep} = this.state;
        return (
            <CenterContent>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const props = {};
                        const labelProps = {};
                        return (
                            <Step key={`${label}-${index}`} {...props}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <Card>
                    <CardContent>
                        {stepsContent[activeStep]({
                            index: activeStep,
                            number: this.state.questionsNumber,
                            title: `Hello ${activeStep}`
                        })}
                    </CardContent>
                    <CardActions>
                        <Button 
                            disabled={this.state.activeStep === 0}
                            onClick={this.handleBack}
                        >
                            Back
                        </Button>
                        {activeStep < steps.length - 1 ? (
                            <Button onClick={this.handleNext}>Next</Button>
                        ) : (
                            <Button>Save</Button>
                        )}
                        
                    </CardActions>
                </Card>
            </CenterContent>    
        );
    }

    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1
        })
    }
    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1
        })
    }
}  

export default QuizStepper;