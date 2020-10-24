import React, { useContext } from 'react'
import "./Question.css"
import QuestionsData from '../../Data/questions.json'
import { CurrentQuestionContext } from '../../Context/CurrentQuestionContext'

export default QuestionCategory

function QuestionCategory({ children, ...restProps }) {
  const [currentQuestion] = useContext(CurrentQuestionContext)

  return (
    <p className="question-category" {...restProps}>
      {decodeURIComponent(QuestionsData[currentQuestion - 1].category)}
      {children}
    </p>
  )
}
