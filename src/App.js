import React from 'react'
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Pages/Home/components/Header';
import NavBar from './Pages/NavBar';
import Projects from './Pages/Home/components/Projects';
import styled from 'styled-components'
import {IoIosArrowDropup} from 'react-icons/io'
import MoreProjects from './Pages/Home/components/MoreProjects';
import Contact from './Pages/Home/components/Contact';
import Skills from './Pages/Home/components/Skills';
import Footer from './Pages/Home/components/Footer';
import Highlights from './Pages/Home/components/Highlights';

function App() {
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
        const highlightsContainer = document.getElementById('highlights-container');
        
        if (highlightsContainer) {
          const highlightsContainerOffset = highlightsContainer.offsetTop +10;
          const scrollPosition = window.scrollY;

          if (scrollPosition >= highlightsContainerOffset) {
            setNavbarBackground('black');
            
          } else {
            setNavbarBackground('transparent');
          }
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <Styles>
    <React.Fragment>
      <NavBar navbarBackground={navbarBackground}/>
      
      <Highlights/>
      <Header/>
      
      <Projects/>
      <MoreProjects/>
      
      <Skills/>
      <Contact/>
      <a href='#header-container'><IoIosArrowDropup id='nav-up'/></a>
      <Footer/>
    </React.Fragment>
    </Styles>
  );
}
const Styles = styled.div`
#nav-up{
  height: 60px;
  width: 60px;
  position: fixed;
  bottom: 10px;
  right: 10px;
}
.navigation {
  position: fixed;
    top: 0;
    left: 0;
    right: 0;
    //background-color: black;
    //background-color: ${(props) => props.navbarBackground};
    border: none;
    z-index: 9999;
}


`
export default App;

//https://cssgradient.io/ - For Gradient