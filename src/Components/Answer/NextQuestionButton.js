import React from 'react'
import './Answer.css'

export default NextQuestionButton

function NextQuestionButton ({ children, ...restProps }) {
  return (
    <button className='next-question-button' {...restProps}>
      {children}
    </button>
  )
}
