import React from "react"
import TodoList from "./TodoList"
import c from "./Todo.module.css"

function Todo() {
    return (
        <TodoList className={c.todoList} />
    )
}

export default Todo