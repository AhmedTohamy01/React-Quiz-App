import React from 'react'
import ScoreBarData from '../Components/ScoreBar/ScoreBarData'
import ScoreSectionWrapper from '../Components/ScoreBar/ScoreSectionWrapper'

export default ScoreBarCompound

function ScoreBarCompound ({ children }) {
  return (
    <>
      <ScoreSectionWrapper>
        <ScoreBarData>
          
        </ScoreBarData>

      </ScoreSectionWrapper>
        {children}
    </>
  )
}
