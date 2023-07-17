import React from 'react'
import styled from 'styled-components'
import { Container, Row} from 'react-bootstrap'
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
       <Container id='header-container' className='header-container'>
           <Row>
                <h2 className='header-title header-text'>Hi, I am  <span>Ahmad Farhan Ishraq</span></h2>
           </Row>
           <Row>
                <p className='header-subtitle header-text'>A Full Stack Software Engineer</p>
           </Row>
            <Row>
                <p className='header-desc'>
                I'm a passionate software engineer with a Masters in Computer Engineering from NYU Tandon. Proficient in Python, Node.js, 
                and React, I craft full-stack software solutions that push boundaries. <br/> <br/>

                My journey blends the cloud and AI/ML, backed by my AWS Certified Solutions Architect credential. 
                As a software engineer at Endless Frontier Labs and a Deep Learning Researcher in Tandon's 
                Vertically Integrated Projects M&A
                team, I've explored the cutting-edge intersections of technology and business. <br/> <br/>

                Join me on this exciting tech adventure where innovation knows no bounds. Let's transform 
                ideas into reality and unleash the potential of software engineering.
                </p>
            </Row>
            <Row>
                <div className='header-resources'>
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
.header-title span{
    background: rgb(2,0,36);
    background: linear-gradient(132deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
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
    color: #00ecff;
}
.header-linkedin{
    height: 40px;
    width: 40px;
    margin-left: 15px;
}
.header-linkedin:hover{
    color: #00ecff;
}


`