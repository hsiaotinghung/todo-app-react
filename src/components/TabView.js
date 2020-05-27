import React from 'react'
import TodoList from './TodoList'
import AddNewTodo from './AddNewTodo'

import './TabView.css'

export default function TabView(props) {
  const filterTodos = (todos, view) => {
    switch (view) {
      case 'all':
        return todos

      case 'active':
        return todos.filter(todo => !todo.done)

      case 'done':
        return todos.filter(todo => todo.done)

      default:
        return todos
    }
  }
  return (
    <React.Fragment>
      <h2>Displaying {props.view} todos</h2>
      <ul className="todoList">
        <TodoList
          view={props.view}
          todos={filterTodos(props.todos, props.view)}
          toggleDone={props.toggleDone}
          handleTodoClick={props.handleTodoClick}
        />
        <AddNewTodo addNewTodo={props.addNewTodo} />
      </ul>
    </React.Fragment>
  )
}
