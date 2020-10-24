import React from 'react'
import './ScoreBar.css'

export default LowestScoreBar

function LowestScoreBar ({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>
}
