import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from '../views/404/NotFound';
import Login from '../views/login/Login';
import App from '../views/App.jsx';

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/main/index" push />} />        
            <Route path="/main" component={App} />
            <Route path="/404" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)