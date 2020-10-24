import React, { useContext } from 'react'
import './Question.css'
import QuestionsData from '../../Data/questions.json'
import { CurrentQuestionContext } from '../../Context/CurrentQuestionContext'

export default QuestionNumber

function QuestionNumber ({ children, ...restProps }) {
  const [currentQuestion] = useContext(CurrentQuestionContext)
  const totalQuestions = QuestionsData.length

  return (
    <p className='question-number' {...restProps}>
      Question {currentQuestion} of {totalQuestions}
      {children}
    </p>
  )
}
