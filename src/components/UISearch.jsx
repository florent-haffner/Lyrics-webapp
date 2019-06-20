import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <h3 className="text-center mb-3">US State Capital</h3>
                        <div className="form-group">
                            <input type="text" id="search"
                            className="form-control from-control-lg"
                            placeholder="Enter state name or abbreviation..." />
                        </div>
                        <div id="match-list">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search