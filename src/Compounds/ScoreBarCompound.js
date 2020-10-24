import React from 'react'
import MaxScore from '../Components/ScoreBar/MaxScore'
import ScoreBar from '../Components/ScoreBar/ScoreBar'
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
          <UserScore>Score: 0%</UserScore>
          <MaxScore>Max Score: 0%</MaxScore>
        </ScoreBarData>
        <ScoreBarWrapper>
          <ScoreBar />
        </ScoreBarWrapper>
      </ScoreSectionWrapper>
        {children}
    </>
  )
}
