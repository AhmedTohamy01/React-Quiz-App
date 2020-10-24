import React from 'react'
import './Answer.css'

export default FinishMessage

function FinishMessage ({ children, ...restProps }) {
  return (
    <div className='finish-message' {...restProps}>
      Test is Over!
      <br />
      You can close the browser now.
      <br />
      Check your mailbox for final results
      <br />
      {children}
    </div>
  )
}
