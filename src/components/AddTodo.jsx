import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit }>
                <input 
                    type="text" 
                    className="form-control mt-2 mb-3" 
                    name="title" 
                    placeholder="Add todo..." 
                    value={this.state.title}
                    onChange={this.onChange}
                />
                {/* <input 
                    className="btn btn-primary mb-3" 
                    type="submit" 
                    value="Submit" 
                /> */}
            </form>
        )
    }
}

export default AddTodo
