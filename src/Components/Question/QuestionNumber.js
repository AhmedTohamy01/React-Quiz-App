import React from "react"
import "./Question.css"
import { CurrentQuestionContext } from '../../Context/CurrentQuestionContext'

export default QuestionNumber

function QuestionNumber({ children, ...restProps }) {
  const [currentQuestion] = useContext(CurrentQuestionContext)
  return (
    <p className="question-number" {...restProps}>
      Question 1 of 20
      {children}
    </p>
  )
}
