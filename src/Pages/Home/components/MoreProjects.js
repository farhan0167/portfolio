import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Row, Col, Card} from 'react-bootstrap'
import AllProjects from '../Data/all-projects.json'

export default class MoreProjects extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
        
    }
    componentDidMount(){
        this.setState({
            data: AllProjects
        })
    }

    
  render() {
      /*I have an array of objects. I want to map each of those objects in 2 cols per row*/ 
      const data = this.state.data
      
      let rows = []
      for(let i=0; i<data.length; i=i+2){
          let temp = []
          temp.push(data[i])
          if(data[i+1] !== undefined){
            temp.push(data[i+1])
          }
          rows.push(temp)
      }
      console.log(rows)

    return (
      <Styles>
          <Container className='more-projects-container'>
              <h2 className='more-projects-container-title'>All Projects</h2>
              {rows.map(row =>(
                  <Row>
                      {row.map(col => (
                          <Col className='more-projects-col' lg={6} md={6} sm={12}>
                          <Card className='more-projects-cards'>
                              <a href={col.project_github} target='_blank'><Card.Title>{col.project_name}</Card.Title></a>
                              <Card.Text>{col.project_desc}</Card.Text>
                              <div className='more-projects-tags'>
                                {col.project_stack.map(tag =>(
                                    <span>{tag}</span>
                                ))}
                              </div>
                          </Card>
                      </Col>
                      ))}
                  </Row>
              ))}
            

          </Container>
      </Styles>
    )
  }
}
const Styles = styled.div`
a{
    text-decoration: none;
}
.more-projects-container{
    margin-top: 60px;
}
.more-projects-container-title{
    text-align: center;
    font-weight: 800;
}
.card-title{
    font-weight:700;
}
.card-text{
    font-size: 14px;
}
.more-projects-col{
    height: 210px;
}
.more-projects-cards{
    margin: 20px;
    padding: 20px;
    height: 170px;
    position: relative;
}
.more-projects-tags{
    position: absolute;
    bottom: 15px;
}
.more-projects-tags span{
    margin-right: 10px;
    font-size: 14px;
    font-weight: 600;
}
@media only screen and (max-width: 600px){
    .more-projects-col{
        height: 300px;
    }
    .more-projects-cards{
        height: 235px;

    }
}

`