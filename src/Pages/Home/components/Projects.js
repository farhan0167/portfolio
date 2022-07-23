import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Row, Col, Card} from 'react-bootstrap'
import ProjectsData from '../Data/project-highlight-data.json'
import { FaGithub} from 'react-icons/fa';
import {IoOpenOutline} from 'react-icons/io5'


export default class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
  render() {
    return (
     <Styles>
        <Container id="projects-container"className='projects-container' fluid>
            <h2 className='projects-container-header'>Projects Highlight</h2>
            <Row className='projects-container-row1'>
                {ProjectsData.map(data =>(
                    <Col key={data.id}>
                    <Card className='projects-container-cards' >
                    <Card.Body>
                        <Card.Title className='card-title'>{data.project_name}</Card.Title>
                        <Card.Text>{data.project_desc}</Card.Text>
                        <div className='projects-tech-stack'>
                            {data.project_stack.map(stack =>(
                                <p>{stack}</p>
                            ))}
                        </div>
                        <div className="more-info">
                            <a className='project-button' href={data.project_github} target='_blank' rel="noreferrer"><FaGithub className='project-links'/></a>
                            <a className='project-button' href={data.project_demo} target='_blank' rel="noreferrer"><IoOpenOutline className='project-links'/></a>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>

                ))}
                
            </Row>
        </Container>
      </Styles>
    )
  }
}

const Styles = styled.div`
.projects-container{

    margin-top: 60px;
    margin-bottom:30px;
    
}
.projects-container-header{
    text-align: center;
    font-weight: 800;
}
.projects-container-row1{
    margin-top: 40px;
    padding-left: 10%;
    padding-right:10%
}
.projects-container-cards{
    height: 20rem;
    width: 20rem;
    padding: 10%;
    text-align: center;
    justify-content:center;
    align-items:center;
}
.card-title{
    font-size: 23px;
    font-weight: 800;
}
.card-text{
    margin-top: 20px;
    height: 120px;
    font-size: 16px;
}
.projects-tech-stack{
    display: flex;
    justify-content: center;
}
.projects-tech-stack p{
    margin: 5px;
    margin-left:10px;
    font-weight: 700;
    font-size: 14px;
}
.more-info{
    display:flex;
    justify-content: center;
    
}
.project-button{
    border: none;
    margin-left: 10px;
}
.project-links{
    height: 20px;
    width: 20px;
    color: black;
}

`