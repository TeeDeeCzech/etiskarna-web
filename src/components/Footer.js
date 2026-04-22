import { Link } from 'react-router-dom';
import './Footer.css';
import logoGrafika from '../images/etiskarna_logo_grafika.png';

function Footer() {
  return (
    <footer className="footer-bar">
      <div className="footer-container">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-base font-black tracking-tighter">
            <img src={logoGrafika} alt="" className="h-6 w-auto" />
            <span className="brand-logo-text-light">eTiskarna</span>
          </div>
          <p className="footer-copyright">Every pixel, every drop matters.</p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-2 md:gap-12">
          <Link className="footer-link" to="/katalog">Katalog produktů</Link>
          <Link className="footer-link" to="/sluzby">Služby</Link>
          <Link className="footer-link" to="/kontakt">Kontakt</Link>
          <Link className="footer-link" to="/letaky">Letáky</Link>
          <Link className="footer-link" to="/vizitky">Vizitky</Link>
          <Link className="footer-link" to="/plakaty">Plakáty</Link>
          <Link className="footer-link" to="/bannery">Bannery</Link>
          <Link className="footer-link" to="/poptavka">Poptávka</Link>
        </div>
        <div className="flex gap-6">
          <a className="footer-icon-link" href="#">
            <span className="material-symbols-outlined">brand_family</span>
          </a>
          <a className="footer-icon-link" href="#">
            <span className="material-symbols-outlined">photo_camera</span>
          </a>
          <a className="footer-icon-link" href="#">
            <span className="material-symbols-outlined">share</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
