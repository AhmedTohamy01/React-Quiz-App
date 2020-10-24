import React from "react"
import "./Question.css"

export default QuestionCategory

function QuestionCategory({ children, ...restProps }) {
  return (
    <p className="question-category" {...restProps}>
      Movies: Board Games
      {children}
    </p>
  )
}
