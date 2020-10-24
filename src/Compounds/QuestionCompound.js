import React from 'react'
import QuestionCategory from '../Components/Question/QuestionCategory'
import QuestionDifficulty from '../Components/Question/QuestionDifficulty'
import QuestionNumber from '../Components/Question/QuestionNumber'
import QuestionSectionWrapper from '../Components/Question/QuestionSectionWrapper'

export default QuestionCompound

function QuestionCompound ({ children }) {
  return (
    <>
      <QuestionSectionWrapper>
        <QuestionNumber />
        <QuestionCategory />
        <QuestionDifficulty />
      </QuestionSectionWrapper>
      {children}
    </>
  )
}
