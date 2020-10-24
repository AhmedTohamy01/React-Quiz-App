import React, { useContext } from 'react'
import "./Question.css"
import { CurrentQuestionContext } from '../../Context/CurrentQuestionContext'

export default QuestionText

function QuestionText({ children, ...restProps }) {
  const [currentQuestion] = useContext(CurrentQuestionContext)

  return (
    <p className="question-text" {...restProps}>
      What was the name of the hero in the 80s animated video games ?
      {children}
    </p>
  )
}
