import React from 'react'
import './ScoreBar.css'

export default MaxScore

function MaxScore ({ children, ...restProps }) {
  return (
    <p className='max-score' {...restProps}>
      {children}
    </p>
  )
}
