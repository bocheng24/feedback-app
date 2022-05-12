import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';
import { CardBox } from '../styled/CardBox.styled'
import { BsTrashFill, BsFillPencilFill } from "react-icons/bs";

function Card({ id, rating, text }) {
  
  const iconStyle = {
    color: '#d35400',
    fontSize: '16px'
  }

  const { handleRemove, handleEdit } = useContext(FeedbackContext)

  return (
    <CardBox>
        <div className="card">
            <p>{ rating }</p>
            <div className="btn-group">
              <button onClick={ () => handleEdit({ id, rating, text }) }>
                  <BsFillPencilFill color={ '#22a6b3' } />
              </button>

              <button onClick={ () => handleRemove(id) }>
                  <BsTrashFill color={ '#eb4d4b' } />
              </button>
            </div>
        </div>
        <p>{ text }</p>
    </CardBox>
  )
}

export default Card