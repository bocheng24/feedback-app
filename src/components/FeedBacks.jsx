import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './Card'

function FeedBacks({ setFeedbacks }) {

    const { feedbacks } = useContext(FeedbackContext)

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