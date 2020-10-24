import React, { useState } from 'react'
import ProgressBar from '../Components/ProgressBar/ProgressBar'
import AnswerCompound from './AnswerCompound'
import QuestionCompound from './QuestionCompound'
import ScoreBarCompound from './ScoreBarCompound'
import { CurrentQuestionContext } from '../Context/CurrentQuestionContext'
import { AnswerResultContext } from '../Context/AnswerResultContext'
import { CorrectAnswersContext } from '../Context/CorrectAnswersContext'

export default QuizCompound

function QuizCompound({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [showAnswerResult, setShowAnswerResult] = useState('')

  return (
    <>
      <CurrentQuestionContext.Provider value={[currentQuestion, setCurrentQuestion]}>
        <AnswerResultContext.Provider value={[showAnswerResult, setShowAnswerResult]}>
          <CorrectAnswersContext.Provider>
            <ProgressBar />
            <QuestionCompound />
            <AnswerCompound />
            <ScoreBarCompound />
              {children}
          </CorrectAnswersContext.Provider>
        </AnswerResultContext.Provider>
      </CurrentQuestionContext.Provider>
    </>
  )
}
