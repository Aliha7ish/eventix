import SeparatorLine from "../components/SeparatorLine";
import styles from "../modules/About.module.css";
import EventixOverlapWord from "../components/EventixOverlapWord";
// import BluredFloatingSquare from "../components/BluredFloatingSquare";

function About() {
  return (
    <section className={styles.aboutSection}>
      <article>
        <div className={styles.textContent}>
          <h2 className={styles["heading-2"]}>
            Immerse yourself in the moment with{" "}
            <EventixOverlapWord
              word="realtime"
              className={styles["text-box"]}
            />
          </h2>
          <p>
            where physical gatherings come to life effortlessly. Seamlessly plan
            and execute events, creating memorable experiences that transcend
            the ordinary. Elevate every detail, ensuring your occasions are
            nothing short of extraordinary.
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

      <article>
        <div className={styles.imageContent}>
          <div>
            <img src="src\images\robot-2.png" alt="futuristic robot" />
          </div>
        </div>
        <div className={styles.textContent}>
          <h2>
            Step into the future of event hosting with{" "}
            <EventixOverlapWord word="virtual" className={styles["text-box"]} />
          </h2>
          <p>
            where physical gatherings come to life effortlessly. Seamlessly plan
            and execute events, creating memorable experiences that transcend
            the ordinary. Elevate every detail, ensuring your occasions are
            nothing short of extraordinary.
          </p>
        </div>
      </article>
    </section>
  );
}

export default About;
