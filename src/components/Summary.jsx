import { useContext } from 'react'
import { SummaryWrapper } from '../styled/SummaryWrapper.styled'
import FeedbackContext from '../context/FeedbackContext'

function Summary() {

  const { feedbacks } = useContext(FeedbackContext)

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