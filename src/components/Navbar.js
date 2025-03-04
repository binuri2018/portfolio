import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Side - Profile Image & Name */}
      <div className="logo">
        <img src="pp1.jpg" alt="Profile" className="profile-pic" />
        <div className="text">
          <h1>Binuri</h1>
          <h2>Full Stack Developer</h2>
        </div>
      </div>

      {/* Right Side - Navigation Links */}
      <div className="nav-links">
        <Link to="about" smooth={true} className="nav-link">
          About
        </Link>
        <Link to="projects" smooth={true}  className="nav-link">
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} className="nav-link">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
