/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "../modules/Home.module.css";
import ButtonComp from "../components/ButtonComp";
import { Link } from "react-router-dom";
import BluredFloatingSquare from "../components/BluredFloatingSquare";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className={`padding-left-lg-section ${styles.homeSection}`}
      >
        <div className={styles.container}>
          <h1 className={styles.heading}>
            Craft unforgettable moments <span>Real-time or Virtual.</span>
          </h1>
          <p>
            Elevate every occasion effortlessly, blending style with efficiency.
            From physical gatherings to virtual affairs, our user-friendly
            platform ensures extraordinary moments etched in memories. Welcome
            to Eventix, where every detail matters, and every experience is
            elevated.
          </p>
          <div className={styles.btnsContainer}>
            <ButtonComp className="btn-gradient">Get started</ButtonComp>
            <ButtonComp link="/about" className="btn-transparent">
              Learn more
            </ButtonComp>
          </div>
          <div>
            Already have an account? <Link to="login">log in</Link>
          </div>
        </div>
        <BluredFloatingSquare className={styles.box1} />
        <BluredFloatingSquare className={styles.box2} />
        <BluredFloatingSquare className={styles.box3} />
      </section>
    </>
  );
}
