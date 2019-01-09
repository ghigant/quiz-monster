import React from 'react';
import QuizCard from '../../components/QuizCard';
import CenterContent from '../../components/CenterContent';

const quiz = {
    id: 1004,
    icon: 'TW',
    subtitle: 'Expire at: 01/19/2019 18:00',
    title: '[TW] Final Evaluation Quiz'
};

export default () => (
    <CenterContent>
        <QuizCard quiz={quiz} />
    </CenterContent>
)