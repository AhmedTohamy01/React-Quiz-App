import React from 'react'
import AnswerButtonsWrapper from '../Components/Answer/AnswerButtonsWrapper'
import AnswerSectionWrapper from '../Components/Answer/AnswerSectionWrapper'

export default AnswerCompound

function AnswerCompound ({ children }) {
  return (
    <>
      <AnswerSectionWrapper>
        <AnswerButtonsWrapper>
          
        </AnswerButtonsWrapper>
      </AnswerSectionWrapper>
      {children}
    </>
  )
}
