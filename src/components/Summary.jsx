import React from 'react'
import { SummaryWrapper } from '../styled/SummaryWrapper.styled'

function Summary({ feedbacks }) {

  const getAvgRating = feedbacks => {
    let total = 0
  
    feedbacks.map(feedback => total += feedback.rating)
  
    const avg = (total / feedbacks.length).toFixed(1).replace(/[.]0/, '')

    return isNaN(avg) ? 0 : avg

  }

  return (
    <SummaryWrapper>
        <p>{ feedbacks.length } Reviews</p>
        <p>Average Rating: {
            getAvgRating(feedbacks)
        }</p>
    </SummaryWrapper>
  )
}

export default Summary