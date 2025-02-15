import { NavLink } from 'react-router-dom';

import './style.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <NavLink to="/" exact activeClassName="active">
          Omar.
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/about" activeClassName="active">
          À propos
        </NavLink>
        <NavLink to="/competance" activeClassName="active">
          Compétences
        </NavLink>
        <NavLink to="/formation" activeClassName="active">
          Formation
        </NavLink>
        <NavLink to="/projects" activeClassName="active">
          Projets
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;