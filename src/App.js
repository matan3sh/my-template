import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import Navbar from 'components/layout/Navbar';
import { Home, Blogs } from 'components/pages';

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className='switch-wrapper'
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/blogs' component={Blogs} />
      </AnimatedSwitch>
    </Router>
  );
}

export default App;
