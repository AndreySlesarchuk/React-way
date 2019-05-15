import React from 'react'
import c from "./Todo.module.css"

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div
            className={c.todoItem}
            onClick={() => props.handleChange(props.todo.id)}
        >
            <input
                onChange={() => {}}
                name="completed"
                type="checkbox"
                checked={props.todo.completed}
            />
            <p style={props.todo.completed ? completedStyle : null}>{props.todo.text}</p>
        </div>
    )
}

export default TodoItem