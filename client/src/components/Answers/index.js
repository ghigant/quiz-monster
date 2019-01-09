import React from 'react';

import SingleAnswer from './SingleAnswer';
import MultipleAnswers from './MultipleAnswers';


export default ({type, answers}) => {
    return type === 'single' ? 
        <SingleAnswer answers={answers} /> : 
        <MultipleAnswers answers={answers} />;
}
