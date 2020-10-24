import React from 'react'
import AnswerSectionWrapper from '../Components/Answer/AnswerSectionWrapper'

export default AnswerCompound

function AnswerCompound ({ children }) {
  return (
    <>
      <AnswerSectionWrapper />
      {children}
    </>
  )
}
