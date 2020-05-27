import React from 'react'
import './TabControl.css'

export default function TabControl(props) {
  let views = ['all', 'active', 'done']
  const handleClick = view => {
    props.switchTabView(view)
  }
  return (
    <div className="tabControlContainer">
      {views.map(view => {
        return (
          <span
            className={`tab ${view === props.view ? 'active' : ''}`}
            key={view}
            onClick={() => handleClick(view)}
          >
            {view}
          </span>
        )
      })}
    </div>
  )
}
