import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    const [feedbacks, setFeedbacks] = useState([
        {
            id: uuidv4(),
            rating: 9,
            text: "Feedback from react context provider"
        },

        {
            id: uuidv4(),
            rating: 2,
            text: "Another Feedback from react context provider"
        }
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edited: false
    })

    const handleAdd = newFeedback => {
        newFeedback.id = uuidv4()
        setFeedbacks([newFeedback, ...feedbacks])
    }

    const handleRemove = id => {
        setFeedbacks(prev => prev.filter(feedback => feedback.id !== id))
    }

    const handleEdit = item => {
        setFeedbackEdit({
            item,
            edited: true
        })
    }
    
    const value = {
        feedbacks,
        handleRemove,
        handleAdd,
        handleEdit,
        feedbackEdit,
    }

    return <FeedbackContext.Provider value={ value }>
        { children }
    </FeedbackContext.Provider>
}

export default FeedbackContext