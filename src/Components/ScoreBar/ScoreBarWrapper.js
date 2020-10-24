import React from 'react'
import './ScoreBar.css'

export default ScoreBarWrapper

function ScoreBarWrapper ({ children, ...restProps }) {
  return <div className='score-bar-wrapper' {...restProps}>{children}</div>
}
