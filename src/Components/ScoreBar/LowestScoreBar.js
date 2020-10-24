import React from 'react'
import './ScoreBar.css'

export default LowestScoreBar

function LowestScoreBar ({ children, ...restProps }) {
  return <div className='lowest-score-bar' {...restProps}>{children}</div>
}
