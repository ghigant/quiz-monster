import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {LoginForm} from './../../components/LoginForm';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

export class LoginPage extends Component {
    render() {
        const {onSubmit, classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container justify={'center'} direction={'row'} alignItems={'center'}>
                    <Grid item xs={10} sm={6} md={5} lg={4}>
                        <Paper className={classes.papper}>
                            <LoginForm onSubmit={onSubmit} />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
};

export default withStyles(styles)(LoginPage);