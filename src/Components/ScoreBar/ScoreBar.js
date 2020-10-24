import React from 'react'
import './ScoreBar.css'

export default ScoreBar

function ScoreBar ({ children, ...restProps }) {
  return (
    <div className='score-bar' {...restProps}>
      {children}
    </div>
  )
}
