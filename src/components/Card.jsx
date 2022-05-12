import React from 'react'
import { CardBox } from '../styled/CardBox.styled'
import { BsTrashFill } from "react-icons/bs";

function Card({ id, rating, text, setFeedbacks }) {
  
  const iconStyle = {
    color: '#d35400',
    fontSize: '16px'
  }

  const handleRemove = () => {
    setFeedbacks(prev => prev.filter(feedback => feedback.id !== id))
  }

  return (
    <CardBox>
        <div>
            <p>{ rating }</p>
            <button onClick={ handleRemove }>
                <BsTrashFill style={ iconStyle }/>
            </button>
        </div>
        <p>{ text }</p>
    </CardBox>
  )
}

export default Card