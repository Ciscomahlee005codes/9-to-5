import { useLocation } from 'react-router-dom';
import './Navbar.css'
import {NavLink, Link, useNavigate } from 'react-router-dom'
import { FaSearch, FaHome, FaBriefcase } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header>
      <div className="nav-container">
        <a className='logo' href="">9to5</a>
        <ul className="navBar">
           <NavLink to='/' id='link'> <li>Home</li></NavLink>
            <li id='link'><a href="#aboutUs">About Us</a></li>
            <NavLink to='/jobs' id='link'><li>Jobs</li></NavLink>
             <NavLink to='/contact' id='link'><li>Contact Us</li></NavLink>
        </ul>
        <button onClick={()=> navigate('/jobs')}>Get Started</button>
      </div>

     {/* Bottom Mobile Nav */}
<div className="bottom-navbar">
  <Link
    to="/"
    className={location.pathname === "/" ? "active" : ""}
    style={{ display: "flex", flexDirection: "column" }}
  >
    <FaHome id="down-icon" />
    <span style={{ fontSize: "15px" }}>Home</span>
  </Link>

  <li
    id="link"
    className={location.hash === "#aboutUs" ? "active" : ""}
    style={{ display: "flex", flexDirection: "column" }}
  >
    <FaInfoCircle style={{ fontSize: "20px", color: "#333" }} />
    <a style={{ fontSize: "15px" }} href="#aboutUs">
      About Us
    </a>
  </li>

  <Link
    to="/jobs"
    className={location.pathname === "/jobs" ? "active" : ""}
    style={{ display: "flex", flexDirection: "column" }}
  >
    <FaBriefcase id="down-icon" />
    <span style={{ fontSize: "15px" }}>Jobs</span>
  </Link>

  <Link
    to="/contact"
    className={location.pathname === "/contact" ? "active" : ""}
    style={{ display: "flex", flexDirection: "column" }}
  >
    <FaPhone id="down-icon" />
    <span style={{ fontSize: "15px" }}>Contact</span>
  </Link>
</div>

    </header>
  )
}

export default Navbar
