import React, { useState } from 'react'
import './AddNewTodo.css'

export default function AddNewTodo(props) {
  const [newTodo, setNewTodo] = useState('')

  const handleChange = event => {
    setNewTodo(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    props.addNewTodo(newTodo)
    setNewTodo('')
  }

  return (
    <li className="addNewTodo">
      <div className="addIcon">
        <span role="img" aria-label="addNewTodoIcon">
          ➕
        </span>
      </div>
      <form className="addNewTodoForm" onSubmit={handleSubmit}>
        <label className="addNewTodoLabel" htmlFor="newTodo">
          Add New
        </label>
        <input
          className="addNewTodoInput"
          type="text"
          value={newTodo}
          onChange={handleChange}
          name="newTodo"
          placeholder="Add a new todo item"
        />
        <input className="addButton" type="submit" value="Add" />
      </form>
    </li>
  )
}
