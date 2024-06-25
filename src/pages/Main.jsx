/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Outlet } from "react-router-dom";
import NavigationPages from "../components/NavigationPages";
import About from "./About";
import Home from "./Home";
import Events from "./Events";
import EventixLogo from "../components/EventixLogo";
import Browse from "./Browse";

function Main() {
  return (
    <>
      <div>
        <EventixLogo />
        <div>
          <Home />
          <About />
          <Events />
        </div>
      </div>
      <div className="main-page">
        <div className="nav-container">
          <NavigationPages />
        </div>
        <div className="main-page-container-inner">
          <EventixLogo />
          <div>
            <Home />
            <About />
            <Events />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
