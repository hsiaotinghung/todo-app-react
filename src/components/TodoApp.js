import React, { useReducer, useEffect, useState } from 'react'
import TodoService from '../services/TodoService'

import TabControl from './TabControl'
import TabView from './TabView'
import Modal from './Modal'
import TodoDetail from './TodoDetail'

function reducer(todos, action) {
  switch (action.type) {
    case 'fetch':
      return action.payload
    case 'add':
      return [...todos, action.payload]
    case 'update':
      return todos.map((todo, index) => {
        return todo.id === action.payload.id ? action.payload : todo
      })
    case 'delete':
      return todos.filter(todo => {
        return todo.id !== action.payload
      })
    default:
      throw new Error()
  }
}
export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    const fetchTodos = async () => {
      const result = await TodoService.getTodos()
      dispatch({ type: 'fetch', payload: result.data })
    }
    fetchTodos()
  }, [])

  const [view, setView] = useState('all')
  const [selectedTodo, setSelectedTodo] = useState({})

  const addNewTodo = newTodo => {
    const updateTodos = async () => {
      const result = await TodoService.postTodos({
        id: todos.length + 1,
        todoName: newTodo,
        done: false
      })
      dispatch({ type: 'add', payload: result.data })
    }
    updateTodos()
  }
  const toggleDone = async todoToUpdate => {
    const result = await TodoService.putTodo(todoToUpdate.id, {
      ...todoToUpdate,
      done: !todoToUpdate.done
    })
    dispatch({ type: 'update', payload: result.data })
  }

  const updateTodo = async todoToUpdate => {
    const result = await TodoService.putTodo(todoToUpdate.id, todoToUpdate)
    dispatch({ type: 'update', payload: result.data })
  }
  const deleteTodo = async todoToDelete => {
    const result = await TodoService.deleteTodo(todoToDelete.id)
    dispatch({ type: 'delete', payload: todoToDelete.id })
  }
  const switchTabView = newView => {
    setView(newView)
  }
  const handleModalClose = () => {
    setSelectedTodo({})
  }
  const setActiveTodo = todo => {
    setSelectedTodo(todo)
  }

  return (
    <div>
      <h1>Todo App</h1>
      <TabControl view={view} switchTabView={switchTabView} />
      <TabView
        view={view}
        todos={todos}
        addNewTodo={addNewTodo}
        toggleDone={toggleDone}
        handleTodoClick={setActiveTodo}
      />
      <Modal
        show={!!selectedTodo.id}
        title="Todo Detail"
        handleClose={handleModalClose}
      >
        <TodoDetail
          todo={selectedTodo}
          setActiveTodo={setActiveTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </Modal>
    </div>
  )
}
