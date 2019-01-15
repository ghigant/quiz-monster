import React, {Component} from 'react';
import {connect} from 'react-redux';

import CenterContent from '../../../components/CenterContent';
import Question from '../../../components/Question';
import {QuestionForm} from '../../../components/QuestionForm';

class QuestionPreview extends Component {
    render() {
        const {question = {}} = this.props;
        return (
            <CenterContent>
                {question._id ? <Question {...question} /> : null}
            </CenterContent>
        );
    }
}

class QuestionEditor extends Component {
    render() {
        return (
            <CenterContent>
                <QuestionForm onSubmit={this.onSave} /> 
            </CenterContent>
        );
    }

    onSave = (data) => {
        const {dispatch} = this.props;
        dispatch({
            type: 'QUESTION.SAVE',
            payload: data
        });
    }
}

const QuestionEditorScreen = (props) => {
    const {id} = props.match.params;
    return id ? <QuestionPreview {...props}/> : <QuestionEditor {...props}/>;
}

export default connect(
    (state, props) => {
        const {id} = props.match.params;
        return {
            question: state.questions.data.find(q => q._id === id)
        };
    }
)(QuestionEditorScreen);
