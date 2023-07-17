import React from 'react'
import { Chrono } from "react-chrono";
import TimelineData from '../Data/timeline.json'
import styled from 'styled-components'

function Timeline() {
    const items = TimelineData
  return (
    <React.Fragment>
        <Styles>
        <div className='timeline-main-div'>
        <Chrono 
            items={items} 
            mode="VERTICAL_ALTERNATING"
            mediaHeight={450}
            cardHeight={70}
            mediaSettings={{ align: 'left', fit: 'cover' }}
            hideControls={true}
            slideShow
            theme={{
                primary: 'black',
                secondary: '#00ecff',
                cardBgColor: 'white',
                titleColor: 'black',
                titleColorActive: 'black',
              }}
            classNames={{
                card: 'my-card',
                cardMedia: 'my-card-media',
                cardSubTitle: 'my-card-subtitle',
                cardText: 'my-card-text',
                cardTitle: 'my-card-title',
                controls: 'my-controls',
                title: 'my-title',
            }}
        />
        </div>
        </Styles>
    </React.Fragment>
  )
}

const Styles = styled.div`
.timeline-main-div{
    padding:10%;
}
.my-card{
    padding: 10px;
    box-shadow: 20px 32px 33px -27px rgba(0,0,0,0.1);
}
.my-card-title{
    color: black;
}
.my-card-text{
    margin: 3px;
}
.my-card-subtitle{
    margin-top: 10px;
}
@media only screen and (max-width: 600px) {
    .timeline-main-div{
        padding:0;
    }
    .my-card{
        padding: 1px;
    }  
}

`

export default Timeline