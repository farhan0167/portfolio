import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Container, Form } from 'react-bootstrap'

export default class Contact extends Component {
  render() {
    return (
      <Styles>
          <Container id='about-me-container' className='about-me-container' fluid>
              <h2 className='about-me-header'>Contact</h2>
              <Button id='email-button' href='mailto:ahmadfarhanishraq@gmail.com'>Email</Button>
          </Container>
      </Styles>
    )
  }
}
const Styles = styled.div`
.about-me-container{
    max-width: 100%;
    width: 100vw;
    background-color:#18191A;
    text-align: center;
    padding: 10%;
}
.about-me-header{
    font-weight: 800;
    margin-bottom: 50px;
    color: #FFFFFF;
}
#email-button{
    border: 1px solid #FFFFFF;
    background-color:#18191A;
    width: 100px;
    height: 50px;
    padding-top: 12px;
    justify-content: center;
    text-align: center;
    align-items: center;
}
`