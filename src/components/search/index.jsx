import React, { Component } from 'react'
import './search.css';

import Tracks from './tracks/Tracks'

export class Search extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Tracks />
                </div>
            </React.Fragment>
        )
    }
}

export default Search