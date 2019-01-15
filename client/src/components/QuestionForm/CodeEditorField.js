import React from 'react';
import {default as SyntaxHighlighter} from '../CodeEditor';

const CodeEditorField = ({
    input,
    ...custom
}) => {
    return (
        <SyntaxHighlighter
            language={'css'}
            padding={'10px 5px'}
            maring={10}
            styles={{
                textarea: {
                    outline: 0
                }
            }}
            {...input}
            {...custom}
        />
    );
};

export default CodeEditorField;