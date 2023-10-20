import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} bt-shop </p>
        <ul className="footer-links">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
