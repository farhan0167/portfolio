import React from 'react'
import styled from 'styled-components'
import {Button, Container, Row} from 'react-bootstrap'
import { FaGithub, FaLinkedin } from 'react-icons/fa';



export default function Header() {
    function buttonGithub(e){
        window.open('https://github.com/farhan0167', '_blank');
        e.preventDefault();
    }
    function buttonLinkedIn(e){
        window.open('https://www.linkedin.com/in/farhan0167/', '_blank');
        e.preventDefault();
    }
  return (
   <React.Fragment>
       <Styles>
       <Container className='header-container'>
           <Row>
                <h2 className='header-title header-text'>Hi, I am Ahmad Farhan Ishraq</h2>
           </Row>
           <Row>
                <p className='header-subtitle header-text'>A Full-Stack Software Developer</p>
           </Row>
            <Row>
                <p className='header-desc'>
                I am a graduate student at New York University with a passion for Web applications and Software
                Development. Currently, I work for NYU Stern's Endless Frontiers Lab as a Web Developer. I have experience
                developing full-stack applications with React, Express and Python. I enjoy painting, photography and reading books
                on Economics and Finance.
                </p>
            </Row>
            <Row>
                <div className='header-resources'>
                    <Button>Resume</Button>
                    <FaGithub className='header-github' onClick={buttonGithub}/>
                    <FaLinkedin className='header-linkedin' onClick={buttonLinkedIn}/>
                </div>
            </Row>
       </Container>
       </Styles>
   </React.Fragment>
  )
}

const Styles = styled.div`
.header-container{
    
    margin-top: 200px;
    padding-left: 10%;
    padding-right:10%;
}
.header-title{
    font-weight: 800;
    font-size: 4rem;
}
.header-subtitle{
    margin-top: 40px;
    font-weight: 700;
    font-size: 2rem;
}
.header-desc{
    margin-top: 40px;
    padding-left: 14%;
    padding-right:14%;
}

.header-text{
    text-align: center;
}
.header-resources{
    display: flex;
    align-items: center;
    justify-content: center;
}
.header-github{
    height: 40px;
    width: 40px;
    margin-left: 15px;
}
.header-github:hover{
    color: #FFBF00;
}
.header-linkedin{
    height: 40px;
    width: 40px;
    margin-left: 15px;
}
.header-linkedin:hover{
    color: #FFBF00;
}


`