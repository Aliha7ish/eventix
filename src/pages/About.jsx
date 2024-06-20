/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SeparatorLine from "../components/SeparatorLine";
import styles from "../modules/About.module.css";
import EventixOverlapWord from "../components/EventixOverlapWord";
// import BluredFloatingSquare from "../components/BluredFloatingSquare";

export default function About() {
  return (
    <section id="/about" className={`${styles.aboutSection}`}>
      <div className={styles.content}>
        <article>
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

        <article>
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
      {/* <article className="row gx-5 justify-content-center">
        <div className={`${styles.textContent} col-12 col-sm-7 col-md-8`}>
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
        <div className={`${styles.imageContent} col-6 col-md-4`}>
          <div>
            <img
              src="src\images\Crowd-in-nightclub.png"
              alt="Crowd in nightclub"
            />
          </div>
        </div>
      </article>

      <SeparatorLine />

      <article className="row gx-5 justify-content-center">
        <div className={`${styles.imageContent} col-6 col-md-4`}>
          <div>
            <img src="src\images\robot-2.png" alt="futuristic robot" />
          </div>
        </div>
        <div className={`${styles.textContent} col-12 col-md-8`}>
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
      </article> */}
    </section>
  );
}
