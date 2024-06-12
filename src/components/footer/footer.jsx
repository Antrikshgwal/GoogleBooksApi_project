import React from 'react';
import './Footer.css'; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About </h3>
          <p>I am Optimus Prime, and I send this message to any surviving Autobots taking refuge among the stars: We are here. We are waiting.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacts</h3>
          <div className="links">
          <p>Email: antrikshgwal@gmail.com</p>
            <p> <a href="https://www.linkedin.com/in/antriksh-gwal-42aab928a/">LinkedIn</a></p>
          <p> <a href="https://www.linkedin.com/in/antriksh-gwal-42aab928a/">Repo of this project</a></p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TopBooks. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
