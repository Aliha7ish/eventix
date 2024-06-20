/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";

const NavigationPages = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - 50 &&
          scrollPosition < sectionTop + sectionHeight - 50
        ) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-nav navbar-nav-main mr-auto">
        <li className="nav-item">
          <NavLink
            to="#home"
            className={`nav-link nav-link-1 ${
              activeLink === "#home" ? "active" : "pending"
            }`}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="#about"
            className={`nav-link nav-link-2 ${
              activeLink === "#about" ? "active" : ""
            }`}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="#events"
            className={`nav-link nav-link-3 ${
              activeLink === "#events" ? "active" : "pending"
            }`}
          >
            Events
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationPages;
