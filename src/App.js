import React from 'react'
import './App.css';
import Header from './Pages/Home/components/Header';
import NavBar from './Pages/NavBar';
import Projects from './Pages/Home/components/Projects';
import styled from 'styled-components'
import {IoIosArrowDropup} from 'react-icons/io'
import AboutMe from './Pages/Home/components/AboutMe';
import MoreProjects from './Pages/Home/components/MoreProjects';

function App() {
  return (
    <Styles>
    <React.Fragment>
      <NavBar/>
      <Header/>
      <Projects/>
      <MoreProjects/>
      <AboutMe id='about-me'/>
      <a href='#header-container'><IoIosArrowDropup id='nav-up'/></a>
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


`
export default App;

//https://cssgradient.io/ - For Gradient