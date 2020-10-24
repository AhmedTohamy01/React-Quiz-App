import React from "react"
import "./Question.css"

export default QuestionText

function QuestionText({ children, ...restProps }) {
  return (
    <p className="question-text" {...restProps}>
      What was the name of the hero in the 80s animated video games ?
      {children}
    </p>
  )
}
