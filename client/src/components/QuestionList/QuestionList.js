import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography  from '@material-ui/core/Typography';
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

class QuestionList extends Component {
    render() {
        const {questions} = this.props;
        return (
           <Grid item xs={12}>
                {
                    questions.map((question) => {
                        const {_id} = question;
                        return (
                            <QuestionCard key={_id} {...question}/>
                        );
                    })
                }
           </Grid>
        );
    }
}

// class QuestionList extends Component {
//     render() {
//         // const {classes} = this.props;
//         return (
//             <Grid item xs={12}>
//                 <List component={'nav'}>
//                     {this.props.questions.map(question => (
//                         <ListItem key={`question-${question._id}`}>
//                             <ListItemAvatar>
//                                 <Avatar>{'CSS'}</Avatar>
//                             </ListItemAvatar>
//                             <ListItemText primary={
//                                 <Typography>{question.content[0].text}</Typography>
//                             } secondary={
//                                 question.content[1] && question.content[1].text
//                             }/>
//                         </ListItem>
                        
//                     ))}
//                 </List>
//             </Grid>

//         );
//     }
// }

export default QuestionList;