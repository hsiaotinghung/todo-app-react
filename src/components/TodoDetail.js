import React, { useState, useEffect } from 'react'
import './TodoDetail.css'

export default function TodoDetail(props) {
  const todo = props.todo
  const [todoName, setTodoName] = useState('')
  const [todoDetail, setTodoDetail] = useState('')
  useEffect(() => {
    setTodoName(todo.todoName || '')
    setTodoDetail(todo.detail || '')
  }, [todo])
  const handleNameChange = event => {
    setTodoName(event.target.value)
  }
  const handelDetailChange = event => {
    setTodoDetail(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    props.updateTodo({
      ...todo,
      todoName,
      detail: todoDetail
    })
    props.setActiveTodo({})
  }
  return (
    <div>
      <form className="todoDetailContainer" onSubmit={handleSubmit}>
        <div className="todoDetailName">
          <label htmlFor="todoDetailName">Title:</label>
          <input
            name="todoDetailName"
            type="text"
            value={todoName}
            onChange={handleNameChange}
            className="todoDetailNameInput"
          ></input>
        </div>
        <div className="todoDescription">
          <label htmlFor="todoDescription">Description:</label>
          <textarea
            name="todoDescription"
            value={todoDetail}
            rows="10"
            onChange={handelDetailChange}
            className="todoDescriptionTextarea"
          ></textarea>
        </div>

        <input className="todoDetailUpdate" type="submit" value="Update" />
      </form>
    </div>
  )
}
