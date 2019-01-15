import React from 'react';
import { Typography } from '@material-ui/core';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import Answers from '../Answers';

import {default as SyntaxHighlighter} from '../CodeEditor';

export default (props) => {
    return (
        <Grid container>
            <Grid item xs={12} >
                {props.content.map( (item, idx) => {
                    return (
                        <div key={item._id}>
                            <Typography variant={'h6'} tag={"h6"}>
                                {item.text}
                            </Typography>
                            {item.code && (
                                <SyntaxHighlighter 
                                    readOnly={true}
                                    language={idx ? 'css': 'html'} 
                                    value={item.code.trim()}
                                />
                                    
                            )}
                        </div>
                    )
                })
                }
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            
            <Grid item xs={12} className={'QuestionAnswers'}>
                <Answers type={props.answer.type} answers={props.responses}/>
            </Grid>
        </Grid>
    );
}
