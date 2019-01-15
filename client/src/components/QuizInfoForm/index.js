import React, {Component} from 'react';
import QuizInfoForm from './QuizInfoForm';

export default class StatefulQuizInfoForm extends Component {
    state = {
        name: '',
        nameError: false,
        description: ''
    };
    render() {
        return (
            <QuizInfoForm 
                {...this.props} 
                {...this.state} 
                onChange={this.onChange}
            />
        );
    }

    onChange = (key, value) => {
        this.setState({
            [key]: value
        });

        this.props.onFormChanged({...this.state});
    }
}