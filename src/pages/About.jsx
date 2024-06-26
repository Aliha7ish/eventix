/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SeparatorLine from "../components/SeparatorLine";
import styles from "../modules/About.module.css";
import EventixOverlapWord from "../components/EventixOverlapWord";
// import BluredFloatingSquare from "../components/BluredFloatingSquare";

export default function About() {
  return (
    <section
      id="/about"
      className={`${styles.aboutSection} padding-left-lg-section `}
    >
      <div className={styles.content}>
        <article className={styles.articleHeader}>
          <div className={styles.textContent}>
            <h2 className={styles["heading-2"]}>
              Immerse yourself in the moment with{" "}
              <EventixOverlapWord
                word="realtime"
                className={styles.eventixInline}
              />
            </h2>
            <p>
              where physical gatherings come to life effortlessly. Seamlessly
              plan and execute events, creating memorable experiences that
              transcend the ordinary. Elevate every detail, ensuring your
              occasions are nothing short of extraordinary.
            </p>
          </div>
          <div className={styles.imageContent}>
            <div>
              <img
                src="src\images\Crowd-in-nightclub.png"
                alt="Crowd in nightclub"
              />
            </div>
          </div>
        </article>

        <SeparatorLine />

        <article className={styles.articleFooter}>
          <div className={styles.imageContent}>
            <div>
              <img src="src\images\robot-2.png" alt="futuristic robot" />
            </div>
          </div>
          <div className={styles.textContent}>
            <h2 className={styles["heading-2"]}>
              Step into the future of event hosting with{" "}
              <EventixOverlapWord
                word="virtual"
                className={styles.eventixInline}
              />
            </h2>
            <p>
              where physical gatherings come to life effortlessly. Seamlessly
              plan and execute events, creating memorable experiences that
              transcend the ordinary. Elevate every detail, ensuring your
              occasions are nothing short of extraordinary.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
