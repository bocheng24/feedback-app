import React from 'react'
import { HeaderContainer } from '../styled/HeaderContainer.styled'
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <Link to='/'>Feedback UI</Link>
      <Link to='/about'>About</Link>
    </HeaderContainer>
  )
}

export default Header