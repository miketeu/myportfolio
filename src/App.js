import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/Header';
import Blog from './components/pages/Project';
import Contact from './components/pages/ProjectGallery';
import Header from './components/pages/Header';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="myportfolio">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/myportfolio/Home.js" element={<Home />} />
          <Route path="/myportfolio/Header.js" element={<Header />} />
          <Route path="/myportfolio/Project.js" element={<Project />} />
          <Route path="/myportfolio/ProjectGallery.js" element={<ProjectGallery />} />
          <Route path="/myportfolio/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

