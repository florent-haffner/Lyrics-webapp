import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap';
import Todos from './Todos';

export class Home extends Component {
    state = {
        pseudo: 'static-state',
        todos: [
                {
                    "id": 1,
                    "title": "Learn React",
                    "description": "Do this for glory",
                    "completed": true
                },
                {
                    "id": 2,
                    "title": "Build stuff",
                    "description": "Or just because.",
                    "completed": false
                },
                {
                    "id": 3,
                    "title": "Make money and fun",
                    "description": "Because it's like that",
                    "completed": false
                },
            ]
        }

    // Toggle complete
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id ) {
                todo.completed = !todo.completed
            }
            return todo;
        }) })
    }

    render() {
        return (
            <div>
                <NavigationBar pseudo={this.state.pseudo} />
                <Container className="mt-4">
                    <Todos 
                    todos={this.state.todos} 
                    markComplete={this.markComplete} />
                </Container>
            </div>
        )
    }
}
export default Home