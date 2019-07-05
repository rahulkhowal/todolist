import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: '',
        date: '',
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }
    handleSubmit = (e, b) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: '',
            date: ''

        })
    }
    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add a new todo and date:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} placeholder="Todo" />
                    <input type="text" onChange={this.handleDate} value={this.state.date} placeholder="Date" />
                    <button className="center">ADD</button>
                </form>
            </div>
        )
    }
}

export default AddTodo