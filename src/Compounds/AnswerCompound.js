import React, { useContext } from 'react'
import QuestionsData from '../../Data/questions.json'
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

  return (
    <>
      <AnswerSectionWrapper>
        <AnswerButtonsWrapper>
          <AnswerButton>Answer1</AnswerButton>
          <AnswerButton>Answer2</AnswerButton>
          <AnswerButton>Answer3</AnswerButton>
          <AnswerButton>Answer4</AnswerButton>
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
