import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "./context";

import Root from "./ReactRootModules/Root";
import Notes from "./components/notes";
import Search from "./components/search";
import Layout from "./components/layout/Layout";

export class AppRouter extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Route path="/" exact component={Root} />
            <Layout />
            <Route path="/search" component={Search} />
            <Route path="/notes" component={Notes} />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}
export default AppRouter;
