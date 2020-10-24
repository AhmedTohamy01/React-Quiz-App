import React, { useContext } from 'react'
import "./Question.css"
import { CurrentQuestionContext } from '../../Context/CurrentQuestionContext'

export default QuestionCategory

function QuestionCategory({ children, ...restProps }) {
  const [currentQuestion] = useContext(CurrentQuestionContext)

  return (
    <p className="question-category" {...restProps}>
      Movies: Board Games
      {children}
    </p>
  )
}
