/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "../modules/EventixLogo.module.css";
import { Link } from "react-router-dom";
export default function EventixLogo() {
  return (
    <Link to="/home" className={styles.logo}>
      <p>
        <span>E</span>
        <span>X</span>
      </p>
    </Link>
  );
}
