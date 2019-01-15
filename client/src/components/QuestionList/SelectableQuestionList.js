import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography  from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

import {Link} from 'react-router-dom';

const QuestionCard = (props) => {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar>{'CSS'}</Avatar>
                }
                title={
                    <Typography variant={'body2'} component={Link} to={`/admin/questions/${props._id}`}>
                       {props.content[0].text}
                    </Typography>
                }
                subheader={props.createdAt}
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }
            />
        </Card>
    );
}

class SelectableQuestionList extends Component {
    render() {
        const {questions} = this.props;
        return (
           <Grid item xs={12}>
            {questions.map((question) => {
                const {_id: id} = question;
                return (
                    <Grid container key={`question-${id}`}>
                        <Grid item xs={'auto'}>
                            <Checkbox />
                        </Grid>
                        <Grid item xs={true}>
                            <QuestionCard {...question}/>
                        </Grid>
                    </Grid>
                );
            })}
           </Grid>
        );
    }
}

export default SelectableQuestionList;