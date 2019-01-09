import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';


const CenterContent = ({classes, children}) => {
    return (
        
        <Grid className={classes.root} container justify='center'>
            <Grid item lg={8} md={10} sm={10} xs={12}>
                {children}
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(CenterContent);