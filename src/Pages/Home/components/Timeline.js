import React from 'react'
import { Chrono } from "react-chrono";
import TimelineData from '../Data/timeline.json'
import styled from 'styled-components'

function Timeline() {
    const items = TimelineData
  return (
    <React.Fragment>
        <Styles>
        <div style={{'padding':'10%'}}>
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
.my-card{
    padding: 10px;
    box-shadow: 4px 5px 19px -12px rgba(0,0,0,0.8);
-webkit-box-shadow: 4px 5px 19px -12px rgba(0,0,0,0.8);
-moz-box-shadow: 4px 5px 19px -12px rgba(0,0,0,0.8);
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


`

export default Timeline