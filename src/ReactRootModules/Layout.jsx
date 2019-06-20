import React, { Component } from 'react'
import { NavigationBar } from '../ReactRootModules/NavigationBar';

export class Layout extends Component {
    state = {
        pseudo: 'static-state'
    }
    render() {
        return (
            <div>
                <NavigationBar pseudo={this.state.pseudo} />
                <div className="container mt-4">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout