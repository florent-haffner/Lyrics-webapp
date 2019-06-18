import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '2vh',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'non'
        }
    }
    markComplete = (e) => {
        console.log(this.props)
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <input type="checkbox" onChange={this.props.markComplete.bind(
                    this, id
                )} /> {' '}
                {title}
            </div>
        )
    }
}

// PropTypes : why???
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem