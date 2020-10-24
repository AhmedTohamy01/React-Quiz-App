import React from "react"
import AnswerButton from "../Components/Answer/AnswerButton"
import AnswerButtonsWrapper from "../Components/Answer/AnswerButtonsWrapper"
import AnswerResult from "../Components/Answer/AnswerResult"
import AnswerSectionWrapper from "../Components/Answer/AnswerSectionWrapper"
import NextQuestionButtonWrapper from "../Components/Answer/NextQuestionButtonWrapper"

export default AnswerCompound

function AnswerCompound({ children }) {
  return (
    <>
      <AnswerSectionWrapper>
        <AnswerButtonsWrapper>
          <AnswerButton>Answer1</AnswerButton>
          <AnswerButton>Answer2</AnswerButton>
          <AnswerButton>Answer3</AnswerButton>
          <AnswerButton>Answer4</AnswerButton>
        </AnswerButtonsWrapper>
      </AnswerSectionWrapper>
      <AnswerResult>Correct Answer!</AnswerResult>
      <NextQuestionButtonWrapper>
        <AnswerButton>Next Question</AnswerButton>
      </NextQuestionButtonWrapper>
      {children}
    </>
  )
}
