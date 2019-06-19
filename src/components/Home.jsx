import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap';
import Todos from './Todos';
import AddTodo from './AddTodo';

export class Home extends Component {
    state = {
        pseudo: 'static-state',
        todos: [
                {
                    "id": 1,
                    "title": "Learn React",
                    "description": "For glory",
                    "completed": false 
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
                    "description": "It's like that",
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
    // Delete Todo
    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }

    addTodo = (title) => {
        console.log(title)
    }

    render() {
        return (
            <div>
                <NavigationBar pseudo={this.state.pseudo} />
                <Container className="mt-4">
                    <AddTodo addTodo={this.addTodo} />
                    <Todos 
                        todos={this.state.todos} 
                        markComplete={this.markComplete} 
                        delTodo={this.delTodo} 
                    />
                </Container>
            </div>
        )
    }
}
export default Home