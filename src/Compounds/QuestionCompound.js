import React from 'react'
import QuestionCategory from '../Components/Question/QuestionCategory'
import QuestionNumber from '../Components/Question/QuestionNumber'
import QuestionSectionWrapper from '../Components/Question/QuestionSectionWrapper'

export default QuestionCompound

function QuestionCompound ({ children }) {
  return (
    <>
      <QuestionSectionWrapper>
        <QuestionNumber />
        <QuestionCategory />
      </QuestionSectionWrapper>
      {children}
    </>
  )
}
