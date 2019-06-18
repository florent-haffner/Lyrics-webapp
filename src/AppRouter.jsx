import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './modules/App';
import Home from './app/Home';

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={App} />
                <Route path="/home" component={Home} />
            </Router>
        )
    }
}