import React from 'react'
import ProgressBar from '../Components/ProgressBar/ProgressBar'
import AnswerCompound from './AnswerCompound'

export default QuizCompound

function QuizCompound ({ children }) {
  return (
    <>
      <ProgressBar />
      <AnswerCompound />
      {children}
    </>
  )
}
