import React from 'react'
import MaxScore from '../Components/ScoreBar/MaxScore'
import ScoreBarData from '../Components/ScoreBar/ScoreBarData'
import ScoreBarWrapper from '../Components/ScoreBar/ScoreBarWrapper'
import ScoreSectionWrapper from '../Components/ScoreBar/ScoreSectionWrapper'
import UserScore from '../Components/ScoreBar/UserScore'

export default ScoreBarCompound

function ScoreBarCompound ({ children }) {
  return (
    <>
      <ScoreSectionWrapper>
        <ScoreBarData>
          <UserScore>Score: 0 %</UserScore>
          <MaxScore>Max Score: 0 %</MaxScore>
        </ScoreBarData>
        <ScoreBarWrapper>
          
        </ScoreBarWrapper>
      </ScoreSectionWrapper>
        {children}
    </>
  )
}
