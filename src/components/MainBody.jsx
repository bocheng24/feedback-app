import { useState } from 'react'
import { Container } from "../styled/Container.styled";
import FeedBacks from './FeedBacks';

import FeedbackData from '../data/FeedbackData'
import Summary from './Summary';
import Form from './Form';

function MainBody() {
  
    const [feedbacks, setFeedbacks] = useState(FeedbackData);


    return (
    <Container>
        <Form feedbacks={ feedbacks } setFeedbacks={ setFeedbacks } />
        <Summary feedbacks={ feedbacks } /> 
        <FeedBacks feedbacks={ feedbacks } setFeedbacks={ setFeedbacks }/>
    </Container>
    )
}

export default MainBody