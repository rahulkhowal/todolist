import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './Addtodo'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'complete the list', date: '2019-03-26', checked: true },
      { id: 2, content: 'complete the cube', date: '2019-03-26', checked: true }
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }
  handleCheckboxChange = (id) => {
    this.setState({ [id]: id.target.checked })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center green-text"> Todo App </h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} handleCheckboxChange={this.handleCheckboxChange} />
        < AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
