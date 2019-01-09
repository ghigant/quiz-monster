import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const QuizCard = ({quiz, classes}) => {
    return (
        <div className={classes.container}>
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar>{quiz.icon}</Avatar>
                }
                title={quiz.title}
                subheader={quiz.subtitle}
            />
            <CardActions>
                <Button variant="outlined" href={`/quiz/${quiz.id}`}>
                    Start
                </Button>
            </CardActions>
        </Card>
    </div>
    )   
};

export default QuizCard;