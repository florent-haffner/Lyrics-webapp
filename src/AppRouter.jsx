import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Root from './ReactRootModules/Root';
import Notes from './components/Notes';
import Search from './components/UISearch'
import Layout from './ReactRootModules/Layout';

export class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Root} />
                <Layout />
                    <Route path="/search" component={Search} />
                    <Route path="/notes" component={Notes} />
            </Router>
        )
    }
}
export default AppRouter;