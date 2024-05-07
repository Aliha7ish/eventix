/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
function NavigationPages() {
  return (
    <nav className="nav-pages">
      <ul>
        <NavLink to="/">
          <li className="nav-item">Home</li>
        </NavLink>
        <NavLink to="about">
          <li className="nav-item">About</li>
        </NavLink>
        <NavLink to="events">
          <li className="nav-item">Events</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavigationPages;
