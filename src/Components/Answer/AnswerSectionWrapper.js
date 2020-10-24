import React from "react"
import "./Answer.css"

export default AnswerSectionWrapper

function AnswerSectionWrapper({ children, ...restProps }) {
  return (
    <div className="answer-section-wrapper" {...restProps}>
      {children}
    </div>
  )
}
