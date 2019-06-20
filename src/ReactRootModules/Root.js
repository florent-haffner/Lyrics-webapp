import React, {Component} from 'react';
import logo from './logo.svg';
import './Root.css';

export default class Root extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
          className="App-link"
          href="/search"
          rel="noopener noreferrer"
        >
          Go to auto-complete search
        </a>
          <a
            className="App-link"
            href="/notes"
            rel="noopener noreferrer"
          >
            Go to Notes
          </a>
        </header>
      </div>
    )
  }
}