import React from 'react'
import './ScoreBar.css'

export default UserScore

function UserScore ({ children, ...restProps }) {
  return (
    <p className='user-score' {...restProps}>
      {children}
    </p>
  )
}
