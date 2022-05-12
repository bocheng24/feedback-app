import React, { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext';
import { RatingsWrapper } from '../styled/RatingsWrapper.styled'
import Rating from './Rating';

function Ratings({ DEFAULT_RATING, setUserRating }) {
    const { feedbackEdit } = useContext(FeedbackContext)

    const [selected, setSelected] = useState(DEFAULT_RATING);
    const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const handleChange = e => {
        setSelected(parseInt(e.currentTarget.value))
        setUserRating(parseInt(e.currentTarget.value))
    }

    useEffect(() => {
        feedbackEdit.edited && setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])

    return (
    <RatingsWrapper>
        {
            ratings.map(rating => (
                <Rating rating={ rating } 
                        handleChange={ handleChange } 
                        selected={ selected }
                        key={ rating }
                />
            ))
        }
    </RatingsWrapper>
    )
}

export default Ratings