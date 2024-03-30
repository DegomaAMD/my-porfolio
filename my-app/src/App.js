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
      {/* <Router>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router> */}
    <DrawerAppBar />
    <BrowserRouter>
          <RoutesWithTransitions />   
    </BrowserRouter>
    <Footer />
    </>
  );
}

function RoutesWithTransitions(){

  const location = useLocation();
  console.log(location);
  return(
    <TransitionGroup component={null}>
      <CSSTransition
          key={location.key}
          timeout={500}
          classNames="fade" 
      >
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