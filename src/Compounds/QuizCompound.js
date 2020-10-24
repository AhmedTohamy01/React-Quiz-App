import React, { useState } from 'react'
import ProgressBar from '../Components/ProgressBar/ProgressBar'
import AnswerCompound from './AnswerCompound'
import QuestionCompound from './QuestionCompound'
import ScoreBarCompound from './ScoreBarCompound'
import { CurrentQuestionContext } from '../Context/CurrentQuestionContext'

export default QuizCompound

function QuizCompound({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(1)

  return (
    <>
      <CurrentQuestionContext.Provider value={[currentQuestion, setCurrentQuestion]}>
        <ProgressBar />
        <QuestionCompound />
        <AnswerCompound />
        <ScoreBarCompound />
        {children}
      </CurrentQuestionContext.Provider>
    </>
  )
}
