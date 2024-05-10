/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
function NavigationPages() {
  return (
    <nav className="navbar">
      <div className="">
        <ul className="navbar-nav navbar-nav-main mr-auto">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "nav-link nav-link-1 active"
                  : "nav-link nav-link-1 pending"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="about" className="nav-link nav-link-2">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="events"
              className={({ isActive }) =>
                isActive
                  ? "active nav-link-3 nav-link"
                  : "pending nav-link-3 nav-link"
              }
            >
              Events
            </NavLink>
          </li>
          {/* <NavLink to="/">
            <li className="nav-item">Home</li>
          </NavLink>
          <NavLink to="about">
            <li className="nav-item">About</li>
          </NavLink>
          <NavLink to="events">
            <li className="nav-item">Events</li>
          </NavLink> */}
        </ul>
      </div>
    </nav>
  );
}

export default NavigationPages;
