import React from 'react'
import './ScoreBar.css'

export default ScoreSectionWrapper

function ScoreSectionWrapper ({ children, ...restProps }) {
  return (
    <div className='score-section-wrapper' {...restProps}>
      {children}
    </div>
  )
}
