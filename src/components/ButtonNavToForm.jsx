/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function ButtonNavToForm({ children, link }) {
  return (
    <Link to={`/${link}`} className="btn btn-transparent btn-nav-form">
      {children}
    </Link>
  );
}
export default ButtonNavToForm;
