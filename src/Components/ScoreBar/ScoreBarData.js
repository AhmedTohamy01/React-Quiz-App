import React from "react"
import "./ScoreBar.css"

export default ScoreBarData

function ScoreBarData({ children, ...restProps }) {
  return (
    <div className="score-bar-data" {...restProps}>
      {children}
    </div>
  )
}
