import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from '../containers/404/NotFound';
import Login from '../containers/login/Login';
import App from '../containers/App.jsx';

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/main/dashboard/index" push />} />        
            <Route path="/main" component={App} />
            <Route path="/404" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)