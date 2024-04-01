import * as React from 'react';
import './App.css';
import DrawerAppBar from './components/Navigation';
import { BrowserRouter, Route, Navigate, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
    
    <BrowserRouter>
      <DrawerAppBar />
      <RoutesWithTransitions />   
      <Footer />
    </BrowserRouter>
    
    </>
  );
}

function RoutesWithTransitions(){

  const location = useLocation();
  return(
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={500} classNames="fade">
          <Routes location={location}>
            <Route exact path="/" element={<Navigate to="/home" />}/>
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Project" element={<Project />} />
            <Route exact path="/Skills" element={<Skills />} />
            <Route exact path="/Contact" element={<Contact />} />
          </Routes>  
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;