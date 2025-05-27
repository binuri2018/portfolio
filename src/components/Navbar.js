import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import profilePic from "./Assets/pp1.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" }
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Left Side: Profile Image & Name */}
        <div className="navbar-left">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="navbar-info">
            <h2>Binuri Manodya</h2>
            <p>Full Stack Developer</p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Right Side: Navigation Links */}
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
