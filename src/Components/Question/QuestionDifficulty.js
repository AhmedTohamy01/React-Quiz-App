import React from "react"
import "./Question.css"

export default QuestionDifficulty

function QuestionDifficulty({ children, ...restProps }) {
  return (
    <p className="question-difficulty" {...restProps}>
      '★★★'
      {children}
    </p>
  )
}
