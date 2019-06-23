import React, { Component } from "react";

import Tracks from "./Tracks";
import Search from "./Search";

export class LyricsFinder extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Search />
          <Tracks />
        </div>
      </React.Fragment>
    );
  }
}

export default LyricsFinder;
