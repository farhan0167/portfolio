import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Highlights() {
    const s3_bucket_img1 = "https://afi225-portfolio-assets.s3.amazonaws.com/img2.gif"
  return (
    <Container id='highlights-container' style={{'padding': '0', 'margin': '0', 'marginTop': '50px', 'position': 'relative', 'top': '-50px'}}>
        <div style={{
        'height': '100vh',
        'backgroundImage': `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${s3_bucket_img1})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'width':'99vw',


    }}>
        <p style={{
            'paddingTop': '300px',
            'paddingLeft': '10%',
            'fontSize': '60px',
            'color': 'white',
            'fontWeight': '400'

        }}>Explore my Portfolio: <br/> Cloud, Software, and AI Solutions</p>
    </div>
    </Container>
  )
}

export default Highlights