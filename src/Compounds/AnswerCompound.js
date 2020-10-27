import React, { useContext, useState } from 'react'
import QuestionsData from '../Data/questions.json'
import AnswerButton from '../Components/Answer/AnswerButton'
import AnswerButtonsWrapper from '../Components/Answer/AnswerButtonsWrapper'
import AnswerResult from '../Components/Answer/AnswerResult'
import AnswerSectionWrapper from '../Components/Answer/AnswerSectionWrapper'
import NextQuestionButton from '../Components/Answer/NextQuestionButton'
import NextQuestionButtonWrapper from '../Components/Answer/NextQuestionButtonWrapper'
import FinishMessage from '../Components/Answer/FinishMessage'
import FinishMessageOverlay from '../Components/Answer/FinishMessageOverlay'
import { CurrentQuestionContext } from '../Context/CurrentQuestionContext'
import { AnswerResultContext } from '../Context/AnswerResultContext'
import { CorrectAnswersContext } from '../Context/CorrectAnswersContext'
import { WrongAnswersContext } from '../Context/WrongAnswersContext'

export default AnswerCompound

function AnswerCompound ({ children }) {
  const [currentQuestion, setCurrentQuestion] = useContext(
    CurrentQuestionContext
  )
  const [showAnswerResult, setShowAnswerResult] = useContext(
    AnswerResultContext
  )
  const [correctAnswersNumber, setCorrectAnswersNumber] = useContext(
    CorrectAnswersContext
  )
  const [wrongAnswersNumber, setWrongAnswersNumber] = useContext(
    WrongAnswersContext
  )
  const [finalResult, setFinalResult] = useState('')
  const [showFinishMessage, setShowFinishMessage] = useState(false)
  const [wrongClickedAnswer, setWrongClickedAnswer] = useState("")
  
  const answersArray = [
    QuestionsData[currentQuestion - 1].correct_answer
  ].concat(QuestionsData[currentQuestion - 1].incorrect_answers)
  const correctAnswer = answersArray[0]

  function checkAnswer (answer) {
    if (answer === correctAnswer) {
      setShowAnswerResult('Correct Answer!')
      setFinalResult('correct')
    }
    if (answer !== correctAnswer) {
      setShowAnswerResult('Wrong Answer!')
      setFinalResult('wrong')
    }
  }

  function doButtonClickActions () {
    if (currentQuestion === QuestionsData.length) {
      if (finalResult === 'correct') {
        setCorrectAnswersNumber(correctAnswersNumber + 1)
      }
      if (finalResult === 'wrong') {
        setWrongAnswersNumber(wrongAnswersNumber + 1)
      }
      setFinalResult('')
      return setShowFinishMessage(true)
    }

    setCurrentQuestion(currentQuestion + 1)
    setShowAnswerResult('')

    if (finalResult === 'correct') {
      setCorrectAnswersNumber(correctAnswersNumber + 1)
    }
    if (finalResult === 'wrong') {
      setWrongAnswersNumber(wrongAnswersNumber + 1)
    }
    setFinalResult('')
  }

  return (
    <>
      <AnswerSectionWrapper>
        <AnswerButtonsWrapper>
          {answersArray.map((answer, index) => (
            <AnswerButton
              key={index}
              disabled={showAnswerResult !== ''}
              onClick={() => checkAnswer(answer)}
            >
              {decodeURIComponent(answer)}
            </AnswerButton>
          ))}
        </AnswerButtonsWrapper>
        <AnswerResult>{showAnswerResult}</AnswerResult>
        <NextQuestionButtonWrapper>
          {showAnswerResult === '' ? null : (
            <NextQuestionButton onClick={doButtonClickActions}>
              Next Question
            </NextQuestionButton>
          )}
        </NextQuestionButtonWrapper>
      </AnswerSectionWrapper>
      {showFinishMessage ? (
        <FinishMessageOverlay>
          <FinishMessage />
        </FinishMessageOverlay>
      ) : null}
      {children}
    </>
  )
}
