/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import styles from "../modules/PageNotFound.module.css";
import ButtonComp from "../components/ButtonComp";

/* eslint-disable react/prop-types */
export default function PageNotFound() {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <h1 className={`${styles.heading}`}>404</h1>
      <p className="">oops!</p>
      <p className="">
        Sorry, the page you&#39;re searching for appears to be missing
      </p>
      <p className="">We&#39;re actively investigating the issue.</p>
      <ButtonComp className="btn-gradient">back to home &rarr;</ButtonComp>
    </div>
  );
}
