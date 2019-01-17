import React, {Component} from 'react';
import Question from '../Question';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';



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
        const total = quiz.length;

        return (
            <Card className={classes.root}>
                <CardHeader avatar={
                    <Chip label={`${this.state.question  + 1}/${total}`} variant="outlined" />
                }
                action={
                    <Chip label={`10:11`} variant="outlined" />
                }

                />
            
                <CardContent>
                    {question ? <Question {...question} onSelect={this.onSelect}/> : 'Done ...'}
                </CardContent>
                <CardActions>
                    <Button 
                        onClick={this.handleNext}
                        disabled={!this.state.answers[this.state.question]}
                    >
                        {this.state.question + 1 === total - 1  ? 'Next' : 'Submit'}
                    </Button>
                </CardActions>
            </Card>
        );
    }

    handleNext = () => {
        const next = this.state.question + 1;

        if (next === this.props.quiz.length) {
            this.props.dispatch({
                type: 'QUIZ_RESULT.SAVE',
                payload: {
                    id: this.props.id,
                    answers: this.state.answers
                }
            });
            return;
        }

        this.setState({
            question: next,
            answers: [...this.state.answers, null]
        }, () => {
            const quizzes = JSON.parse(localStorage.getItem('quizzes')) || {};
            quizzes[this.props.id] = this.state;
            localStorage.setItem('quizzes', JSON.stringify(quizzes));
        });
    }
}
