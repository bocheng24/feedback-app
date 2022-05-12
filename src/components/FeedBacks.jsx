import React from 'react'
import Card from './Card'

function FeedBacks({ feedbacks, setFeedbacks }) {

  return (
    feedbacks.length > 0 ? (
        <div>

            {
                feedbacks.map(
                    feedback => (
                        <Card key={ feedback.id } 
                              rating={ feedback.rating }
                              text={ feedback.text }
                              id={ feedback.id }
                              setFeedbacks={ setFeedbacks }
                        />
                    )
                )
            }

        </div>
    ) : (
        <p style={ {marginTop: '35px'} }>No feedback yet...</p>
    )
    
  )
}

export default FeedBacks