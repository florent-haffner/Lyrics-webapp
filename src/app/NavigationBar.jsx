import React, { Component } from 'react';
import { Navbar, InputGroup, Form, FormControl, Button, Container } from 'react-bootstrap';

export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar className="bg-dark justify-content-between">
                <Container>
                    <Form inline>
                        <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        </InputGroup>
                    </Form>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                        <Button type="submit">Submit</Button>
                    </Form>
                </Container>
            </Navbar>
        )
    }
}