
import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    const [feedbacks, setFeedbacks] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edited: false
    })
    const headers = {
        'Content-Type': 'application/json'
    }

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch('/feedbacks?_sort=id&_order=desc')
        const data = await response.json()
        setFeedbacks(data)
        setIsLoading(false)
    }


    const handleAdd = async newFeedback => {

        const response = await fetch('/feedbacks', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()

        setFeedbacks([data, ...feedbacks])
    }

    const handleRemove = async id => {
        const response = await fetch(`/feedbacks/${id}`, {
            method: 'DELETE',
            headers: headers
        })

        setFeedbacks(prev => prev.filter(feedback => feedback.id !== id))
    }

    const handleEdit = item => {
        setFeedbackEdit({
            item,
            edited: true
        })
    }

    const handleUpdate = async (id, updatedFeedback) => {

        const response = await fetch(`/feedbacks/${id}`, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(updatedFeedback)
        })

        setFeedbacks(prev => prev.map(
            feedback => feedback.id === id ? { ...feedback, ...updatedFeedback } : feedback)
        )

        setFeedbackEdit({
            item: {},
            edited: false
        })
    }
    
    const value = {
        feedbacks,
        handleRemove,
        handleAdd,
        handleEdit,
        feedbackEdit,
        handleUpdate,
        isLoading
    }

    return <FeedbackContext.Provider value={ value }>
        { children }
    </FeedbackContext.Provider>
}

export default FeedbackContext