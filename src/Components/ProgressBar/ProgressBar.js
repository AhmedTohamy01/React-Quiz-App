import React from 'react'
import './ProgressBar.css'

export default ProgressBar

function ProgressBar ({ children, ...restProps }) {
  return (
    <div className='progress-bar' {...restProps}>
      {children}
    </div>
  )
}
