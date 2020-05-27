import React from 'react'
import DoneButton from './DoneButton'
import './TodoItem.css'

export default function TodoItem(props) {
  const todo = props.todo
  const toggleDone = () => {
    props.toggleDone(todo)
  }
  const handleClick = () => {
    props.handleTodoClick(todo)
  }
  return (
    <li className="todoItem">
      <DoneButton done={todo.done} toggleDone={toggleDone} />
      <div className="todoName" onClick={handleClick}>
        {todo.todoName}
      </div>
    </li>
  )
}
