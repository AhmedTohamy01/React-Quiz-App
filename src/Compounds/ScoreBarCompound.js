import React from 'react'
import ScoreSectionWrapper from '../Components/ScoreBar/ScoreSectionWrapper'

export default ScoreBarCompound

function ScoreBarCompound ({ children }) {
  return (
    <>
      <ScoreSectionWrapper>
        
      </ScoreSectionWrapper>
        {children}
    </>
  )
}
