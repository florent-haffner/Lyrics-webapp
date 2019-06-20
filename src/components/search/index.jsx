import React, { Component } from 'react'
import './search.css';

import Tracks from './tracks/Tracks'

export class Search extends Component {

    render() {
        return (
            <React.Fragment>
                <Tracks />
            </React.Fragment>
        )
    }
}

export default Search