import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    const [feedbacks, setFeedbacks] = useState([
        {
            id: 0,
            rating: 10,
            text: "Feedback from react context provider"
        }
    ]);
    
    const value = {
        feedbacks,
    }

    return <FeedbackContext.Provider value={ value }>
        { children }
    </FeedbackContext.Provider>
}

export default FeedbackContext