import React, {Component} from 'react';
import {connect} from 'react-redux';

import AppHeader from '../../components/AppHeader';
import Quiz from '../../components/Quiz';
import CenterContent from '../../components/CenterContent';

const QuizPage = (props) => (
    <>
        <AppHeader title={'[TW] Final Evaluation Quiz'} />
        <CenterContent>
            <Quiz id={props.match.params.id} quiz={props.quiz} dispatch={props.dispatch}/>
        </CenterContent>
    </>
);

class QuizScreen extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'QUIZ.REQUEST',
            payload: {
                id: this.props.match.params.id
            }
        });
    }

    render() {
        return <QuizPage {...this.props}/>;
    }
}

export default connect(
    (state) => ({
        quiz: state.quiz.data ? state.quiz.data.questions : []
    })
)(QuizScreen);