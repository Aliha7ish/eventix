/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Outlet } from "react-router-dom";
import NavigationPages from "../components/NavigationPages";
function Main() {
  return (
    <div className="main-page">
      <div className="nav-conatiner">
        <NavigationPages />
      </div>
      <div>
        <Outlet />
      </div>
      <div></div>
    </div>
  );
}

export default Main;
