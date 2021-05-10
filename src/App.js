import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './components/pages/Portfolio';
import AboutMe from './components/pages/AboutMe';
import Footer from './components/Footer';
import Portraits from './components/pages/Portraits';
import Landscape from './components/pages/Landscape';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/about-me' component={AboutMe} />
          <Route path='/portraits' component={Portraits} />
          <Route path='/landscape' component={Landscape} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
