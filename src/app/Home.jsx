import React, { Component } from 'react';
import NavigationBar from '../modules/NavigationBar';
import { Container } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <Container className="mt-4">
                    <h2>Home</h2>
                </Container>
            </div>
        )
    }
}