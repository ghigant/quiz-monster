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
            question: 0
        };
    }
    render() {
        const {quiz = [], classes} = this.props;
        
        const question = quiz ? quiz[this.state.question] : null;
        return (
            <Card className={classes.root}>
                <CardContent>
                    {question ? <Question {...question} /> : 'Loading ...'}
                </CardContent>
                <CardActions>
                    <Button onClick={this.handleNext}>{'Next'}</Button>
                </CardActions> 
            </Card>
        );
    }

    handleNext = ({question}) => {
        this.setState({
            question: this.state.question + 1
        })
    }
}
