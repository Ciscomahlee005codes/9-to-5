import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>9 to 5</h2>
          <p>Connecting talent to opportunity — one job at a time.</p>
        </div>

        <div className="footer-links">
          <h4 className="foot-head">Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><a href="#aboutUs">About Us</a></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="foot-head">Support</h4>
          <ul>
            <li>Email: support@9to5.com</li>
            <li>Phone: +234 812 126 9433</li>
            <li><Link to="/contact">Contact Form</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4 className="foot-head">Follow Us On:</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} 9 to 5. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
