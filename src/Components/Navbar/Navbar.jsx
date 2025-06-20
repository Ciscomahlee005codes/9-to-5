import React, { useState } from 'react'
import './Navbar.css'
import {NavLink, Link, useNavigate } from 'react-router-dom'
import { FaSearch, FaHome, FaBriefcase } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

const Navbar = () => {

  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('Home')
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
          className={activeNav === "Home" ? "active" : ""}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <FaHome id="down-icon" />
          <span style={{ fontSize: "15px" }}>Home</span>
        </Link>
          <li id='link' 
          className={activeNav === "About" ? "active" : ""}
          style={{ display: "flex", flexDirection: "column" }}
          >
           <FaInfoCircle  style={{ fontSize: "20px", color: '#333' }}/>
          <a style={{ fontSize: "15px" }} href="#aboutUs">About Us</a></li>
        <Link
          to="/jobs"
          className={activeNav === "Jobs" ? "active" : ""}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <FaBriefcase id="down-icon" />
          <span style={{ fontSize: "15px" }}>Jobs</span>
        </Link>
        <Link
          to="/contact"
          className={activeNav === "Contact" ? "active" : ""}
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
