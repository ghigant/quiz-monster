import React, { Component } from 'react';
import Editor from 'react-simple-code-editor';

import Paper from '@material-ui/core/Paper';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'

export default class CodeEditor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            code: this.props.value || ''
        };
    }

    render() {
        const {readOnly = false, value, language, classes = {}} = this.props;
        return (
            <Paper className={classes.root}>
                { readOnly ? (
                    <pre className={classes.code} dangerouslySetInnerHTML={{
                        __html: this.highlight(value, language)
                    }} />
                ) : (
                    <Editor
                        value={this.state.code}
                        onValueChange={this.onChange}
                        highlight={this.highlight}
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 14
                        }}
                />
                )
                }
                
            </Paper>
        );
    }

    highlight(code, language = 'javascript') {
        return Prism.highlight(code, Prism.languages[language]);
    }

    onChange = (code) => {
        this.setState({
            code
        });

        if (this.props.onChange) {
            this.props.onChange(code);
        }
    }
}