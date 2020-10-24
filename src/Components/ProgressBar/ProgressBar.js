import React, { useContext } from 'react'
import './ProgressBar.css'
import QuestionsData from '../../Data/questions.json'
import { CurrentQuestionContext } from '../../Context/CurrentQuestionContext'

export default ProgressBar

function ProgressBar({ children, ...restProps }) {
  const [currentQuestion] = useContext(CurrentQuestionContext)
  const totalQuestions = QuestionsData.length
  const widthPercentage = (currentQuestion / totalQuestions) * 100

  return (
    <div className='progress-bar' style={{ width: `${widthPercentage}%` }} {...restProps}>
      {children}
    </div>
  )
}
