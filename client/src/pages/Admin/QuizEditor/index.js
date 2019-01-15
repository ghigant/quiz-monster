import React, { Component } from 'react';
import {connect} from 'react-redux';
import CenterContent from '../../../components/CenterContent';
import SelectableQuestionList from '../../../components/QuestionList/SelectableQuestionList';
import QuizInfoForm from '../../../components/QuizInfoForm';
import {
    Stepper, Step, StepLabel, 
    Card, CardContent, CardActions,
    Button
} from '@material-ui/core';

const steps = [
    'General Info',
    'Questions',
    'Settings'
];

const stepsContent = [
    (props) => {
       return <QuizInfoForm {...props} title={steps[props.index]}/>;
    },
    (props) => {
        return (
            <SelectableQuestionList 
                questions={props.questions} 
                onSelect={props.onSelect}
            />
        );
     },
     (props) => {
        return <h1>{props.title}</h1>
     }
];

const stepValidators = [
    (model = {}) => {
        const {name = ''} = model;
        return name && name.trim().length > 0
    },
    (model = []) => {
        return model.length > 5
    }
];

class QuizStepper extends Component {
    state = {
        activeStep: 0,
        info: {}
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch({
            type: 'QUESTIONS.REQUEST'
        });
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
                            title: `Hello ${activeStep}`,
                            onFormChanged: this.handleInfoUpdates,
                            onSelect: this.handleSelectionChange,
                            ...this.props,
                            
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
        const isValid = stepValidators[this.state.activeStep](this.state.info);
        if (isValid) {
            this.next();
        }
    }

    next() {
        this.setState({
            activeStep: this.state.activeStep + 1
        })
    }

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1
        })
    }

    handleInfoUpdates = (data) => {
        this.setState({
            info: {...data}
        })
    }

    handleSelectionChange = () => {
        this.setState({
            selection: []
        })
    }
}  

export default connect(
    (state) => ({
        questions: state.questions.data
    })
)(QuizStepper);