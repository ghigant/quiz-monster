import React from 'react';

import SingleAnswer from './SingleAnswer';
import MultipleAnswers from './MultipleAnswers';


export default ({type, answers, onSelect}) => {
    return type === 'single' ?
        <SingleAnswer answers={answers} onSelect={onSelect}/> :
        <MultipleAnswers answers={answers} onSelect={onSelect}/>;
}
