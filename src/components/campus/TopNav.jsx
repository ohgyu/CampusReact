import React from 'react'
import styled from 'styled-components';
import menuBar from './img/menuBar.png';
import logoRow from './img/logoRow.png';
import mail from './img/mail.png';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap:95px;
  padding: 22px 26px 18px 26px;
  box-sizing: border-box;
`


function TopNav() {
  return (
    <Container>
      <img src={menuBar} style={{width:"27px", height: "18px", marginTop:"5px"}}/>
      <img src={logoRow} style={{width:"116px", height: "27px"}}/>
      <img src={mail} style={{width:"27px", height: "18px", marginTop:"5px"}}/>
    </Container>
  )
}

export default TopNav