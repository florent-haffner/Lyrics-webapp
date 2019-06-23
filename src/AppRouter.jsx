import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "./context";

import Root from "./ReactRootModules/Root";
import Notes from "./components/notes";
import LyricsFinder from "./components/lyrics";
import Layout from "./components/layout/Layout";
import Lyrics from "./components/lyrics/Lyrics";

export class AppRouter extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Route exact path="/" component={Root} />
            <Layout />
            <Route exact path="/lyrics" component={LyricsFinder} />
            <Route exact path="/lyrics/track/:id" component={Lyrics} />
            <Route exact path="/notes" component={Notes} />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}
export default AppRouter;
