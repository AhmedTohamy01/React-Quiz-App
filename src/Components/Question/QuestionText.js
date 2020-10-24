import React from "react"
import "./Question.css"

export default QuestionText

function QuestionText({ children, ...restProps }) {
  return (
    <p className="question-text" {...restProps}>
      Movies: Board Games
      {children}
    </p>
  )
}
