import React from "react"
import "./Question.css"

export default QuestionNumber

function QuestionNumber({ children, ...restProps }) {
  return (
    <p className="question-number" {...restProps}>
      Question 1 of 20
      {children}
    </p>
  )
}
