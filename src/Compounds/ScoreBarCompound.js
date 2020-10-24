import React, { useContext } from 'react'
import QuestionsData from '../Data/questions.json'
import MaxScore from '../Components/ScoreBar/MaxScore'
import ScoreBar from '../Components/ScoreBar/ScoreBar'
import ScoreBarData from '../Components/ScoreBar/ScoreBarData'
import ScoreBarWrapper from '../Components/ScoreBar/ScoreBarWrapper'
import ScoreSectionWrapper from '../Components/ScoreBar/ScoreSectionWrapper'
import UserScore from '../Components/ScoreBar/UserScore'
import { CurrentQuestionContext } from '../Context/CurrentQuestionContext'
import { CorrectAnswersContext } from '../Context/CorrectAnswersContext'
import { WrongAnswersContext } from '../Context/WrongAnswersContext'

export default ScoreBarCompound

function ScoreBarCompound({ children }) {
  const [currentQuestion] = useContext(CurrentQuestionContext)
  const [correctAnswersNumber] = useContext(CorrectAnswersContext)
  const [wrongAnswersNumber] = useContext(WrongAnswersContext)

  const totalQuestions = QuestionsData.length
  const totalAnsweredQuestions = currentQuestion - 1
  const score = (correctAnswersNumber / totalAnsweredQuestions) * 100
  const lowestScore = (correctAnswersNumber / totalQuestions) * 100
  const maximumScore = ((totalQuestions - wrongAnswersNumber) / totalQuestions) * 100

  return (
    <>
      <ScoreSectionWrapper>
        <ScoreBarData>
        <UserScore>
            {totalAnsweredQuestions === 0
              ? 'Score: 0%'
              : `Score: ${Math.round(score)}%`}
          </UserScore>
          <MaxScore>Max Score: 0%</MaxScore>
        </ScoreBarData>
        <ScoreBarWrapper>
          <ScoreBar />
        </ScoreBarWrapper>
      </ScoreSectionWrapper>
        {children}
    </>
  )
}
