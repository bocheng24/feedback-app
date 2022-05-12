import React, { useState } from 'react'
import Ratings from './Ratings'

import { motion, AnimatePresence } from 'framer-motion'
import { FormWrapper } from '../styled/FormWrapper.styled'

function Form({ feedbacks, setFeedbacks }) {
    const DEFAULT_RATING = 10
    const invalidMsg = 'Please enter at lease 10 characters'

    const [inputText, setInputText] = useState('')
    const [btnDisable, setBtnDisable] = useState(false)
    const [userRating, setUserRating] = useState(DEFAULT_RATING)
    const [message, setMessage] = useState('')

    const handleOnChange = e => {

        setInputText(e.target.value)
        
        if (e.target.value.trim().length < 10) {
            setBtnDisable(true)
            setMessage(invalidMsg)
        } else {
            setBtnDisable(false)
            setMessage(null)
        }

    }


    const handleOnSubmit = e => {

        e.preventDefault()

        if(inputText.trim().length < 10) {
            setBtnDisable(true)
            setMessage(invalidMsg)
        } else {
            const newFeedback = {
                id: feedbacks.length + 1,
                rating: userRating,
                text: inputText
            }

            setFeedbacks([newFeedback, ...feedbacks])

            setInputText('')
        }

    }

    return (
        <FormWrapper>

            <h3>How would you rate our service?</h3>
            <Ratings DEFAULT_RATING={ DEFAULT_RATING } setUserRating={ setUserRating } />

            <form onSubmit={ handleOnSubmit }>
                <input type="text"
                    value={ inputText }
                    onChange={ handleOnChange }
                    placeholder='Write feedback here' />

                <button className={ `btn btn-inline ${ btnDisable ? 'btn-disable' : 'btn-feedback' }` } 
                        type='submit'
                        disabled={ btnDisable }
                        onClick={ handleOnSubmit }
                >Send</button>
            </form>

            { message && (
                <AnimatePresence>
                    <motion.div key={1}
                                initial={ {opacity: 0} }
                                animate={ {opacity: 1} }
                                exit={ {opacity: 0} }
                    >
                        <div className="message">{ message }</div>
                    </motion.div>
                </AnimatePresence>
                ) 
            }
        </FormWrapper>
    )
}

export default Form