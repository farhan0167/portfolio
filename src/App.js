import React from 'react'
import './App.css';
import Header from './Pages/Home/components/Header';
import NavBar from './Pages/NavBar';
import Projects from './Pages/Home/components/Projects';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Header/>
      <Projects/>
    </React.Fragment>
  );
}

export default App;
