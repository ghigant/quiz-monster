import React, {Component} from 'react';
import Question from '../Question';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 0,
            answers: [null]
        };
    }

    onSelect = (value) => {
        const answer = Array.isArray(value) ? value : [value];
        this.setState(({answers}) => {
            const current = [...answers];
            current[this.state.question] = answer.length ? answer : null;
            return {answers: current};
        });
    }

    componentWillMount() {
        const quizzes = JSON.parse(localStorage.getItem('quizzes')) || {};
        const state = quizzes[this.props.id] || {
            question: 0,
            answers: [null]
        };
        this.setState(state);
    }

    render() {
        const {quiz = [], classes} = this.props;

        const question = quiz ? quiz[this.state.question] : null;
        return (
            <Card className={classes.root}>
                <CardContent>
                    {question ? <Question {...question} onSelect={this.onSelect}/> : 'Done ...'}
                </CardContent>
                <CardActions>
                    <Button onClick={this.handleNext} disabled={!this.state.answers[this.state.question]}>{'Next'}</Button>
                </CardActions>
            </Card>
        );
    }

    handleNext = () => {
        const next = this.state.question + 1;
        this.setState({
            question: next,
            answers: [...this.state.answers, null]
        }, () => {
            const quizzes = JSON.parse(localStorage.getItem('quizzes')) || {};
            quizzes[this.props.id] = this.state;
            localStorage.setItem('quizzes', JSON.stringify(quizzes, null, 2));
        });
    }
}
