import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import {default as SyntaxHighlighter} from '../CodeEditor';
import { Button, Checkbox, Grid, Fab, CardContent, Card, CardActions, withStyles} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class MUIQuestionForm extends Component {
    state = {
        answer: {
            values: [],
            type: 'single'
        },
        content: [{
            text: '',
            code: null
        }],
        responses: [{
            text: ''
        }, {
            text: ''
        }]
    };
    render() {
        const {classes = {}} = this.props;
        return (
            <Card>
                <CardContent>
                <form className={classes.container} noValidate autoComplete="off">
                <FormControl component="fieldset" fullWidth>
                    <FormLabel>Question Section</FormLabel>
                    {this.state.content.map((item, idx) => (
                        <div key={`qcontent-${idx}`}>
                            <TextField
                                required
                                fullWidth
                                multiline
                                label={'Text'}
                                margin="normal"
                                variant="outlined"
                                InputProps={{
                                    className: classes.textField,
                                }}
                                value={this.state.content[idx].text}
                                onChange={this.handleContentTextChange}
                            />
                    <FormLabel required>Code</FormLabel>
                    <SyntaxHighlighter
                        value={''}
                        language={'css'}
                        padding={'10px 5px'}
                        maring={10}
                        onChange={(code) => {
                            this.setState({
                                content: [{
                                    text: this.state.content[0].text,
                                    code
                                }]
                            })
                        }}
                        styles={{
                            textarea: {
                                outline: 0
                            }
                        }}
                    />
                        </div>
                    ))}
                    
                </FormControl>
                <FormControl component="fieldset" fullWidth>
                    <FormLabel>Answer Section</FormLabel>
                    {this.state.responses.map((response, idx) => {
                        return (
                            <Grid
                            key={`answer-${idx}`}
                        container 
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={'auto'}>
                            <Checkbox 
                                checked={this.state.answer.values.findIndex(v => v === idx) !== -1 }
                                onChange={(event, checked) => {
                                    const selection = this.state.answer.values.filter(v => v !== idx);
                                    if (checked) {
                                        selection.push(idx);
                                    
                                    }
                                    this.setState({
                                        answer: {
                                            values: selection,
                                            type: selection.length > 1 ? 'multiple' : 'single'
                                        }
                                    })
                                }}
                            />
                        </Grid>
                        <Grid item xs={true}>
                            <TextField 
                                fullWidth
                                multiline
                                label={'Text'}
                                margin="normal"
                                value={response.text}
                                variant="outlined"
                                onChange={this.handleAnswerChange(idx)}
                            />
                        </Grid>
                        <Grid item xs={'auto'}>
                            <IconButton size="small" color="secondary" aria-label={"Delete"} onClick={this.handleDeleteAnswer(idx)}>
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                        )
                    })}
                    
                    <Grid container>
                        <Fab size="small" color="primary" aria-label={"Add"} onClick={this.handleAddAnswer}>
                            <AddIcon />
                        </Fab>
                    </Grid>
                    
                </FormControl>
            </form>
                </CardContent>
                <CardActions>
                    <Button onClick={this.handleSave}>Save</Button>
                    <Button onClick={this.handleFormReset}>Reset</Button>
                </CardActions>
            </Card>
            
        )
    }

    handleAddAnswer = () => {
        this.setState({
            responses: [...this.state.responses, {
                text: ''
            }]
        })
    }

    handleDeleteAnswer = (idx) => () => {
        const responses = this.state.responses.filter((r, index) => idx !== index);
        this.setState({
            responses
        });
    }

    handleAnswerChange = (idx) => (event) => {
        const value = event.target.value;
        this.setState((state) => {
            state.responses[idx] = {
                text: value
            };
            return {
                responses: [...state.responses]
            }
        });
    }

    handleSave = () => {
        this.props.onSubmit({
            ...this.state
        });
    }

    handleContentTextChange = (event) => {
        const {content} = this.state;
        this.setState({
            content: [{
                text: event.target.value,
                code: content[0].code
            }]
        });
    }

    handleFormReset = () => {
        this.setState({
            answer: {
                values: [],
                type: 'single'
            },
            content: [{
                text: '',
                code: null
            }],
            responses: [{
                text: ''
            }]
        })
    }
}


const styles = theme => ({
})

export default withStyles(styles)(MUIQuestionForm);
