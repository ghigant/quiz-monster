import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

class QuestionCard extends Component {
    render() {
        const {_id} = this.props; 
        return (
            <Grid item xs={12}>
                {_id}
            </Grid>
            
        );
    }
}

export default QuestionCard;