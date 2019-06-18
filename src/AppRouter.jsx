import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './ReactRootModules/App';
import Home from './components/Home';

export class AppRouter extends Component {
    state = {
        pseudo: 'static'
    }
    render() {
        return (
            <Router>
                <Route path="/" exact component={App} />
                <Route path="/home" component={Home} />
            </Router>
        )
    }
}
export default AppRouter;