import React from 'react'
import styled from 'styled-components';
import logo from '../logo.svg';

const Container = styled.header`
  background-color: black;
  height: 2rem;  
`;

const Logo = styled.img`
  margin: 0.5rem 0 0 1rem;
`;

const Header = () => {
  return (
    <Container>
      <Logo src={logo} className="App-logo" alt="logo" />
    </Container>
  );
}

export default Header;