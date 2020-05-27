import React from 'react'
import './DoneButton.css'

export default function DoneButton(props) {
  let isDone = props.done || false
  return (
    <div
      className={`doneButton ${isDone ? 'complete' : ''}`}
      onClick={props.toggleDone}
    >
      <span>{isDone ? '✔️' : ''}</span>
    </div>
  )
}
