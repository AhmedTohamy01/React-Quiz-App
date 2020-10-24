import React, { useContext } from 'react'
import "./Question.css"
import { CurrentQuestionContext } from '../../Context/CurrentQuestionContext'

export default QuestionDifficulty

function QuestionDifficulty({ children, ...restProps }) {
  const [CurrentQuestion] = useContext(CurrentQuestionContext)

  return (
    <p className="question-difficulty" {...restProps}>
      ★★★
      {children}
    </p>
  )
}
