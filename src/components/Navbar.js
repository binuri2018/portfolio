import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import profilePic from "./Assets/pp1.jpg"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Side: Profile Image & Name */}
      <div className="navbar-left">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="navbar-info">
          <h2>Binuri</h2>
          <p>Full Stack Developer</p>
        </div>
      </div>

      {/* Right Side: Navigation Links */}
      <div className="navbar-links">
      <Link to="about" spy={true} smooth={true} offset={-50} duration={500} className="nav-link">
        About
      </Link>


        <Link to="projects" smooth={true} duration={500} offset={-50} className="nav-link">
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} offset={-50} className="nav-link">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
