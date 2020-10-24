import React from 'react'
import './Answer.css'

export default FinishMessageOverlay

function FinishMessageOverlay ({ children, ...restProps }) {
  return (
    <div className='finish-message-overlay' {...restProps}>
      {children}
    </div>
  )
}
