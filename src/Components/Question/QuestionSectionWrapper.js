import React from 'react'
import './Question.css'

export default QuestionSectionWrapper

function QuestionSectionWrapper ({ children, ...restProps }) {
  return (
    <div className='question-section-wrapper' {...restProps}>
      {children}
    </div>
  )
}
