import React, { useState } from 'react'
import ProgressBar from '../Components/ProgressBar/ProgressBar'
import AnswerCompound from './AnswerCompound'
import QuestionCompound from './QuestionCompound'
import ScoreBarCompound from './ScoreBarCompound'
import { CurrentQuestionContext } from '../Context/CurrentQuestionContext'
import { AnswerResultContext } from '../Context/AnswerResultContext'
import { CorrectAnswersContext } from '../Context/CorrectAnswersContext'
import { WrongAnswersContext } from '../Context/WrongAnswersContext'

export default QuizCompound

function QuizCompound({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [showAnswerResult, setShowAnswerResult] = useState('')
  const [correctAnswersNumber, setCorrectAnswersNumber] = useState(0)
  const [wrongAnswersNumber, setWrongAnswersNumber] = useState(0)

  return (
    <>
      <CurrentQuestionContext.Provider value={[currentQuestion, setCurrentQuestion]}>
        <AnswerResultContext.Provider value={[showAnswerResult, setShowAnswerResult]}>
          <CorrectAnswersContext.Provider value={[correctAnswersNumber, setCorrectAnswersNumber]}>
            <WrongAnswersContext.Provider value={[correctAnswersNumber, setCorrectAnswersNumber]}>
              <ProgressBar />
              <QuestionCompound />
              <AnswerCompound />
              <ScoreBarCompound />
              {children}
            </WrongAnswersContext.Provider>
          </CorrectAnswersContext.Provider>
        </AnswerResultContext.Provider>
      </CurrentQuestionContext.Provider>
    </>
  )
}
