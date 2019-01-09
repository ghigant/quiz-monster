import React, { Component } from 'react';

import FormGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class MultipleAnswers extends Component {
    constructor(props) {
        super(props);
        this.state = this._getInitialState();
    }

    render() {
        const {answers} = this.props; 
        
        return (
            <FormGroup>
                {(answers.map(({_id, text}) => (
                    <FormControlLabel 
                        key={`answer-${_id}`}
                        value={_id}
                        control={
                            <Checkbox 
                                onChange={this.handleChange(_id)} 
                                checked={this.state[_id]}
                            />
                        }
                        label={text} 
                    />    
                )))}
            </FormGroup>
        );
    }

    handleChange = (id) => (event) => {
        this.setState({ ...this.state, [id]: event.target.checked });
    }

    _getInitialState() {
        return this.props.answers.reduce((map, answer) => {
            return { ...map, [answer._id]: false};
        }, {});
    }
}

export default MultipleAnswers;