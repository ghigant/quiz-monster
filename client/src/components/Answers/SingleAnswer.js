import React, { Component } from 'react';

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class SingleAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = { selection: null };
    }
    render() {
        const {answers = []} = this.props;
        return (
            <RadioGroup value={this.state.selection} onChange={this.handleChange}>
                {(answers.map(({_id, text}) => (
                    <FormControlLabel 
                        key={`answer-${_id}`}
                        value={`${_id}`}
                        control={<Radio />}
                        label={text} 
                    />    
                )))}
            </RadioGroup>
        )
    }

    handleChange = (event) => {
        this.setState({ selection: event.target.value });
    }
}
