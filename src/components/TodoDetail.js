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
  const handleDetailChange = event => {
    setTodoDetail(event.target.value)
  }
  const handleDeleteTodo = () => {
    props.deleteTodo(todo)
    props.setActiveTodo({})
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
          <label htmlFor="todoDetailName" className="todoDetailLabel">
            Title:
          </label>
          <input
            name="todoDetailName"
            type="text"
            value={todoName}
            onChange={handleNameChange}
            className="todoDetailNameInput"
          ></input>
        </div>
        <div className="todoDescription">
          <label htmlFor="todoDescription" className="todoDetailLabel">
            Description:
          </label>
          <textarea
            name="todoDescription"
            value={todoDetail}
            rows="10"
            onChange={handleDetailChange}
            className="todoDescriptionTextarea"
          ></textarea>
        </div>
        <div className="todoStatus">
          <span className="todoDetailLabel">Status:</span>
          <span className="todoStatusDisplay">
            {todo.done ? 'Done' : 'Active'}
          </span>
        </div>

        <div className="deleteTodo" onClick={handleDeleteTodo}>
          Delete Task
        </div>
        <input className="todoDetailUpdate" type="submit" value="Update" />
      </form>
    </div>
  )
}
