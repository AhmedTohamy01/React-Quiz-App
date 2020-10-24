import React, { useContext } from 'react'
import './ProgressBar.css'
import { CurrentQuestionContext } from '../../Context/CurrentQuestionContext'

export default ProgressBar

function ProgressBar({ children, ...restProps }) {
  const [currentQuestion] = useContext(CurrentQuestionContext)

  return (
    <div className='progress-bar' {...restProps}>
      {children}
    </div>
  )
}
