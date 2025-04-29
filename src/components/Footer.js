import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Crystal Cosmetics. All rights reserved.</p>
      <ul className="footer-links">
        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/terms">Terms & Conditions</Link></li>
      </ul>
    </footer>
  );
}

export default Footer;
