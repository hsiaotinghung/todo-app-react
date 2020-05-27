import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props) {
  let todos = props.todos
  return (
    <React.Fragment>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          toggleDone={props.toggleDone}
          handleTodoClick={props.handleTodoClick}
        />
      ))}
    </React.Fragment>
  )
}
