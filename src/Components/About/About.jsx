import React from "react";
import { useNavigate } from 'react-router-dom'
import AboutImage from '../../assets/About-img.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
import "./About.css";

const About = () => {
  const navigate = useNavigate();
  return (
    <div id="aboutUs">
       <h2 className="about-head">About Us</h2>
      <div className="about-container">
        <img src={AboutImage} alt="" />
      <div className="about-content">
        <h3>Empowering Careers, One Connection at a Time</h3>
        <p>
          At 9 to 5, we believe finding the right job should be seamless,
          empowering, and personal. Our platform connects ambitious individuals
          with opportunities that match their skills, values, and goals. Whether
          you're starting out, switching paths, or scaling new heights, we're
          here to guide you every step of the way — with smart tools, trusted
          employers, and real human support. Because your career journey
          deserves more than just listings — it deserves a partner. We go beyond
          job postings to provide a career-building experience that evolves with
          you. From resume optimization and tailored job alerts to expert career
          advice and community support, 9 to 5 is designed to equip you with the
          resources you need to stand out in today’s competitive job market. We
          work closely with reputable companies to ensure quality, transparency,
          and growth opportunities for every seeker. Your potential is limitless
          — and at 9 to 5, we’re committed to helping you unlock it. This isn’t
          just a job board. It’s your launchpad for a brighter, bolder
          professional future.
        </p>
       <div className="btn"> <button onClick={()=> navigate('/jobs')}>Explore 9 to 5 <IoIosArrowRoundForward /> </button></div>
      </div>
    </div>
    </div>
  );
};

export default About;
