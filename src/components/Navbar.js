import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logoGrafika from '../images/etiskarna_logo_grafika.png';

function Navbar() {
  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`;

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="nav-logo">
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logoGrafika} alt="" className="h-7 w-auto" />
            <span className="brand-logo-text">eTiskarna</span>
          </NavLink>
        </div>
        <div className="hidden md:flex items-center space-x-12">
          <NavLink to="/katalog" className={linkClass}>Produkty</NavLink>
          <NavLink to="/sluzby" className={linkClass}>Služby</NavLink>
          <NavLink to="/kontakt" className={linkClass}>Kontakt</NavLink>
        </div>
        <NavLink to="/poptavka">
          <button className="nav-cta-btn">Poptat kalkulaci</button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
