import React from 'react';
import {Switch, Route} from 'react-router-dom';

import DashBoardScreen from './DashBoard';
import QuestionsScreen from './Questions';
import QuestionEditor from './QuestionEditor';
import QuizEdtor from './QuizEditor';

const NotFoud = () => <h1>404 - Page not found</h1>

const AdminRouter = ({match}) => {
    return (
        <Switch>
            <Route exact path={`${match.url}/`} component={DashBoardScreen} />
            <Route exact path={`${match.url}/questions`} component={QuestionsScreen} />
            <Route exact path={`${match.url}/questions/new`} component={QuestionEditor} />
            <Route path={`${match.url}/questions/:id`} component={QuestionEditor} />
            <Route exact path={`${match.url}/quiz/new`} component={QuizEdtor} />
            <Route component={NotFoud} />
        </Switch>
    )
}

export default AdminRouter;