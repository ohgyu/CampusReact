import React from 'react'
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #ddd;
`;
export const Menu = styled.div`
    width: 20px;
    height: 20px;
`;

function TopNav() {
  return (
    <Container> TopNav입니다
    </Container>
  )
}

export default TopNav