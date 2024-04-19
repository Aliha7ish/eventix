/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function ButtonComp({ link = "", children, className = "" }) {
  return (
    <Link to={`/${link}`} className={`btn ${className}`}>
      {children}
    </Link>
  );
}
