import React from 'react'
import ProgressBar from '../Components/ProgressBar/ProgressBar'
import AnswerCompound from './AnswerCompound'
import QuestionCompound from './QuestionCompound'
import ScoreBarCompound from './ScoreBarCompound'

export default QuizCompound

function QuizCompound ({ children }) {
  return (
    <>
      <ProgressBar />
      <QuestionCompound />
      <AnswerCompound />
      <ScoreBarCompound />
      {children}
    </>
  )
}
