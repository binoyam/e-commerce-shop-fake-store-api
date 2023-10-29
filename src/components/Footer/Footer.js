import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} bt-shop </p>
        <ul className="footer-links">
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#contact0us">Contact Us</a>
          </li>
          <li>
            <a href="#privacy-policy">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
