/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Outlet } from "react-router-dom";
import NavigationPages from "../components/NavigationPages";
import About from "./About";
import Home from "./Home";
import Events from "./Events";
function Main() {
  return (
    <div className="main-page">
      <div className="nav-conatiner">{/* <NavigationPages /> */}</div>
      <div>
        {/* <Outlet /> */}
        {/* <Home />
        <About /> */}
        <Events />
      </div>
      <div></div>
    </div>
  );
}

export default Main;
