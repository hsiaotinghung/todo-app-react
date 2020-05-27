import React, { useRef } from 'react'
import './Modal.css'

export default function Modal(props) {
  const modalContentNode = useRef()
  const showHideClassName = props.show
    ? 'modal display-block'
    : 'modal display-none'
  const handleContainerClick = event => {
    if (modalContentNode.current.contains(event.target)) {
      return
    }
    event.stopPropagation()
    props.handleClose()
  }
  return (
    <div className={showHideClassName} onClick={handleContainerClick}>
      <section className="modal-main" ref={modalContentNode}>
        <h2>{props.title || ''}</h2>
        <button className="closeButton" onClick={props.handleClose}>
          Close
        </button>
        {props.children}
      </section>
    </div>
  )
}
