import React from 'react'
import ProgressBar from '../Components/ProgressBar/ProgressBar'
import AnswerCompound from './AnswerCompound'
import QuestionCompound from './QuestionCompound'

export default QuizCompound

function QuizCompound ({ children }) {
  return (
    <>
      <ProgressBar />
      <QuestionCompound />
      <AnswerCompound />
      {children}
    </>
  )
}
