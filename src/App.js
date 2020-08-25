import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { mapStyles, bounceTransition } from './animation';

import Navbar from './components/layout/Navbar';

import Home from './components/pages/Home';
import Blogs from './components/pages/Blogs';

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className='switch-wrapper'
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/blogs' component={Blogs} />
      </AnimatedSwitch>
    </Router>
  );
}

export default App;
