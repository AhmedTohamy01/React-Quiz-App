import React from 'react'
import './ScoreBar.css'

export default MaximumScoreBar

function MaximumScoreBar ({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>
}
