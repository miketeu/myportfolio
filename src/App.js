import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Header from './components/pages/Header';
import Project from './components/pages/Project';
import ProjectGallery from './components/pages/ProjectGallery';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="myportfolio">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/myportfolio/Home" element={<Home />} />
          <Route path="/myportfolio/Header" element={<Header />} />
          <Route path="/myportfolio/Project" element={<Project />} />
          <Route path="/myportfolio/ProjectGallery" element={<ProjectGallery />} />
          <Route path="/myportfolio/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

