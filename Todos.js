import React from 'react'

const Todos = ({ todos, deleteTodo, handleCheckboxChange }) => {
    const List = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" keys={todo.id} >
                    <button type="checkbox" onChange={() => { handleCheckboxChange(todo.id) }}>{todo.checked}</button>
                    <span onClick={() => { deleteTodo(todo.id) }}> {todo.content}</span>
                    <span className="right"> {todo.date}</span>
                </div >
            )


        })

    ) : (
            <p className="center">you have no todos left</p>
        );
    return (
        <div className="todos collection">{List}</div>
    )
}
export default Todos;