import React from 'react'
import ScoreBarData from '../Components/ScoreBar/ScoreBarData'
import ScoreSectionWrapper from '../Components/ScoreBar/ScoreSectionWrapper'
import UserScore from '../Components/ScoreBar/UserScore'

export default ScoreBarCompound

function ScoreBarCompound ({ children }) {
  return (
    <>
      <ScoreSectionWrapper>
        <ScoreBarData>
          <UserScore>Score: 0 %</UserScore>
        </ScoreBarData>

      </ScoreSectionWrapper>
        {children}
    </>
  )
}
