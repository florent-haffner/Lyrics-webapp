import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import axios from 'axios';

export default class Notes extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.setState({ todos: res.data }))
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
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => this.setState({ todos: 
            [...this.state.todos.filter(todo => todo.id !== id)] }));
    }

    addTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: title,
            completed: false
        })
        .then(res => this.setState({ todos: 
            [...this.state.todos, res.data] })
        );
    }

    render() {
        return (
            <div>
                <div className="container mt-4">
                    <AddTodo addTodo={this.addTodo} />
                    <Todos 
                        todos={this.state.todos} 
                        markComplete={this.markComplete} 
                        delTodo={this.delTodo} 
                    />
                </div>
            </div>
        )
    }
}