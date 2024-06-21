/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "../modules/EventixLogo.module.css";
import { Link } from "react-router-dom";
export default function EventixLogo() {
  return (
    <Link to="/home">
      <a className={styles.logo}>
        <span>E</span>
        <span>X</span>
      </a>
    </Link>
  );
}
