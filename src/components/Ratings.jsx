import React, { useState } from 'react'

import { RatingsWrapper } from '../styled/RatingsWrapper.styled'
import Rating from './Rating';

function Ratings({ DEFAULT_RATING, setUserRating }) {

    const [selected, setSelected] = useState(DEFAULT_RATING);
    const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const handleChange = e => {
        setSelected(parseInt(e.currentTarget.value))
        setUserRating(parseInt(e.currentTarget.value))
    }

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