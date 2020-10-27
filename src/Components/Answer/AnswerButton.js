import React from 'react'
import './Answer.css'

export default AnswerButton

function AnswerButton ({ children, ...restProps }) {
  return (
    <button {...restProps}>
      {children}
    </button>
  )
}
