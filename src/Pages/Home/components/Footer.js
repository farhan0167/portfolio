import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Container } from 'react-bootstrap'

export default class Footer extends Component {
  render() {
    return (
      <Styles>
          <Container id='footer-container' className='footer-container' fluid>
              <p className='footer-header'>
                &copy; Ahmad Farhan Ishraq, 2022
              </p>
              <p className='footer-header'>
                Design inspired from <a target='_blank' href='https://rajshekhar26.github.io/cleanfolio-minimal/'>cleanfolio</a>
              </p>
          </Container>
      </Styles>
    )
  }
}
const Styles = styled.div`
.footer-container{
    max-width: 100%;
    width: 100vw;
    background-color: #15202B;
    text-align: center;
    padding: 5%;
}
.footer-header{
    font-weight: 800;
    color: #FFFFFF;
}
a{
  text-decoration: none;
}

`