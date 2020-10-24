import React, { useContext } from 'react'
import QuestionsData from '../Data/questions.json'
import AnswerButton from "../Components/Answer/AnswerButton"
import AnswerButtonsWrapper from "../Components/Answer/AnswerButtonsWrapper"
import AnswerResult from "../Components/Answer/AnswerResult"
import AnswerSectionWrapper from "../Components/Answer/AnswerSectionWrapper"
import NextQuestionButton from "../Components/Answer/NextQuestionButton"
import NextQuestionButtonWrapper from "../Components/Answer/NextQuestionButtonWrapper"
import { CurrentQuestionContext } from '../Context/CurrentQuestionContext'

export default AnswerCompound

function AnswerCompound({ children }) {
  const [currentQuestion, setCurrentQuestion] = useContext(CurrentQuestionContext)

  const answersArray = [QuestionsData[currentQuestion - 1].correct_answer].concat(QuestionsData[currentQuestion - 1].incorrect_answers)
  const correctAnswer = answersArray[0]
  
  return (
    <>
      <AnswerSectionWrapper>
      <AnswerButtonsWrapper>
          {answersArray.map((answer, index) => (
            <AnswerButton
              key={index}
            >
              {decodeURIComponent(answer)}
            </AnswerButton>
          ))}
        </AnswerButtonsWrapper>
        <AnswerResult>Correct Answer!</AnswerResult>
        <NextQuestionButtonWrapper>
          <NextQuestionButton>Next Question</NextQuestionButton>
        </NextQuestionButtonWrapper>
      </AnswerSectionWrapper>
      {children}
    </>
  )
}
