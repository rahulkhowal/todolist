import React from 'react'

const Todos = ({ todos, deleteTodo }) => {
    const List = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" keys={todo.id}>
                    <span onClick={() => { deleteTodo(todo.id) }}> {todo.content}/{todo.date}</span>
                </div>
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