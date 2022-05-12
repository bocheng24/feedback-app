import { useState } from 'react'
import { Container } from "../styled/Container.styled";
import FeedBacks from './FeedBacks';

import Summary from './Summary';
import Form from './Form';

function MainBody() {
  



    return (
    <Container>
        <Form />
        <Summary /> 
        <FeedBacks />
    </Container>
    )
}

export default MainBody