import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/myportfolio/src/components/pages/Home"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>


      </li>

      <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/myportfolio/src/components/pages/Project/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Project
        </NavLink>
      </li>



      <li className="nav-item">
        <NavLink
          to="/myportfolio/src/components/pages/Header/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Header
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="/myportfolio/src/components/pages/ProjectGallery/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          ProjectGallery
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/myportfolio/src/components/pages/contact/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>


      
  
    </ul>
  
  </ul>
)}

export default NavTabs;
