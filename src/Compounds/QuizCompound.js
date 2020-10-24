import React from 'react'
import ProgressBar from '../Components/ProgressBar/ProgressBar'

export default QuizCompound

function QuizCompound ({ children }) {
  return <><ProgressBar />{ children }</>
}
