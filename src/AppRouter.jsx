import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Root from './ReactRootModules/Root';
import App from './components/App';

export class AppRouter extends Component {
    state = {
        pseudo: 'static'
    }
    render() {
        return (
            <Router>
                <Route path="/" exact component={Root} />
                <Route path="/app" component={App} />
            </Router>
        )
    }
}
export default AppRouter;