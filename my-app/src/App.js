import * as React from 'react';
import './App.css';
import DrawerAppBar from './components/Navigation';
import { BrowserRouter as Router, Route, Navigate, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div>
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
    <Router>
          <DrawerAppBar />
          <RoutesWithTransitions />
          <Footer />
    </Router>
      
    </div>
  );
}

function RoutesWithTransitions(){

  const location = useLocation();
  return(
    <SwitchTransition mode="out-in">
      <CSSTransition
          key={location.key}
          timeout={300}
          classNames="fade" 
      >
          <Routes location={location}>
            <Route exact path="/" element={<Navigate to="/home" />}/>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/project" element={<Project />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>  
      </CSSTransition>
    </SwitchTransition>
  );
}

export default App;