import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import CenterContent from '../CenterContent';
import {Link} from 'react-router-dom';

export default class AppHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null
        };
    }
    render() {
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);
        const { classes, title } = this.props;
        
        return (
            <AppBar position="static">
                <CenterContent>
                <Toolbar>
                    <Typography variant="h5" color="inherit" className={classes.grow}>
                        {title}
                    </Typography>
                    <Button component={Link} to={'/admin/questions/new'} color="inherit">
                        NEW
                    </Button>
                    <IconButton
                        aria-owns={open ? 'menu-appbar' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit"
                    >
                <AccountCircle />
                </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    </Menu>
                </Toolbar>
                </CenterContent>
            </AppBar>
        );
    }

    handleMenu = (event) => {
        this.setState({anchorEl: event.currentTarget });
    }

    handleClose = () => {
        this.setState({ anchorEl: null });
    }
}