import React, { Component } from "react";

import Tracks from "./tracks/Tracks";

export class LyricsFinder extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Tracks />
        </div>
      </React.Fragment>
    );
  }
}

export default LyricsFinder;
