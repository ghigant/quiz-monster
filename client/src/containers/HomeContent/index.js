import React, { Component } from 'react';

import {connect} from 'react-redux';
import {fetchQuzzes} from '../../store/reducers/quizzes';

import QuizCard from '../../components/QuizCard';
import CenterContent from '../../components/CenterContent';

class HomeContent extends Component {
    componentDidMount() {
        this.props.fetchQuzzes();
    }
    render() {
        console.log(this.props);
        return (
            <CenterContent>
                {
                    this.props.quizzes.map((quiz) => {
                        return <QuizCard key={`quiz-${quiz._id}`} quiz={quiz} />;
                    })
                }
            </CenterContent>
        );
    }
}

export default connect(
    (state) => ({
        quizzes: state.quizzes.map((row) => ({
            id: row._id,
            title: row.name,
            subtitle: row.description
        }))
    }),
    dispatch => ({
        fetchQuzzes: () => dispatch(fetchQuzzes())
    })
)(HomeContent);
