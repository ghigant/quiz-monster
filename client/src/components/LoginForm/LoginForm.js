import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export class LoginForm extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }
    
    render() {
        return (
            <form autoComplete="off" onSubmit={this._handleSubmit}>
                <Grid item xs={12}>
                    <TextField
                        required
                        label="IDN"
                        className={''}
                        type="text"
                        margin="normal"
                        variant="outlined"
                        value={this.state.username}
                        onChange={this.changeHandler('username')}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>    
                <Grid item xs={12}>
                    <TextField
                        required
                        label="Password"
                        className={''}
                        type="password"
                        margin="normal"
                        variant="outlined"
                        value={this.state.password}
                        onChange={this.changeHandler('password')}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        variant="outlined" 
                        color="primary"
                        type={'submit'}
                    >
                        Login
                    </Button>
                </Grid>
            </form>
        );
    }

    changeHandler = (name) => (event) => {
        const {value = ''} = event.target;
        this.setState({
            [name]: value
        });
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }
}
