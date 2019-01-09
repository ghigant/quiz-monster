import React, { Component } from 'react';
import { connect }from 'react-redux';
import CenterContent from '../../../components/CenterContent';
import QuestionList from '../../../components/QuestionList';

class QuestionsPage extends Component {
    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        return (
            <CenterContent>
                <QuestionList questions={this.props.questions}/>
            </CenterContent>
        );
    }
}
const mapStateToProps = (state) => ({
    questions: state.questions.data || []

});

const mapDipatchToActions = (dispatch) => ({
    fetchQuestions: () => dispatch({
        type: 'QUESTIONS.REQUEST'
    })
});

export default connect(
    mapStateToProps,
    mapDipatchToActions
)(QuestionsPage);
