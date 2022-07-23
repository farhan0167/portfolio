import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Row, Col, Card, Image} from 'react-bootstrap'
import img1 from './img/img1.jpeg'
import nyu from './img/nyu.jpeg'
import baruch from './img/baruch.jpeg'



export default class AboutMe extends Component {
  render() {
    return (
        <Styles>
            <Container id='about-me' className='about-me' fluid>
                <h2 className='about-me-title'>About Me</h2>
                <Row>
                    <Col className='about-me-col' lg={6} md={6}>
                        <Image className='about-me-col-imgs' src={img1}/>
                    </Col>
                    <Col id='about-me-col-efl' className='about-me-col' lg={6} md={6}>
                        <div className='about-me-text'>
                            <p className='about-me-text-title'>Endless Frontiers Lab</p>
                            <p className='about-me-text-pos'>Software Engineer</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col id='about-me-col-nyu' className='about-me-col' lg={6} md={6}>
                        <div className='about-me-text'>
                            <p className='about-me-text-title'>New York University</p>
                            <p className='about-me-text-pos'>Masters in Computer Engineering</p>
                        </div>
                    </Col>
                    <Col className='about-me-col' lg={6} md={6}>
                        <Image className='about-me-col-imgs' src={nyu}/>
                    </Col>
                </Row>
                <Row>
                    <Col className='about-me-col' lg={6} md={6}>
                        <Image className='about-me-col-imgs' src={baruch}/>
                    </Col>
                    <Col id='about-me-col-cuny' className='about-me-col' lg={6} md={6}>
                        <div className='about-me-text'>
                            <p className='about-me-text-title'>Baruch College, CUNY</p>
                            <p className='about-me-text-pos'>BBA in Computer Information Systems</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Styles>
      
    )
  }
}

const Styles = styled.div`
.about-me{
    max-width: 100%;
    padding: 0;
    margin-top: 10%;

}

.about-me-title{
    text-align: center;
    font-weight: 800;
    margin-bottom: 2%;
}
.about-me-col{
    
    height: 400px;
    padding: 0;
    
}
.about-me-col-imgs{
    height:100%;
    width: 100%
}
.about-me-text{
    padding: 20%;
}
.about-me-text-title{
    font-weight:800;
    font-size: 30px;
}
.about-me-text-pos{
    font-weight:600;
    font-size: 20px;
}
#about-me-col-efl{
    background-color: #121F2D;
}
#about-me-col-efl div p{
    color: #94BEEA;
}
#about-me-col-nyu{
    background-color: #94BEEA;
}
#about-me-col-nyu div p{
    color: #121F2D;
}
#about-me-col-cuny{
    background-color: #121F2D;
}
#about-me-col-cuny div p{
    color: #94BEEA;
}

`