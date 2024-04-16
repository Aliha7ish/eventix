import SeparatorLine from "../components/SeparatorLine";
import styles from "../modules/About.module.css";
import EventixOverlapWord from "../components/EventixOverlapWord";
import BluredFloatingSquare from "../components/BluredFloatingSquare";

function About() {
  return (
    <div className={`${styles["mainContent-container"]} container-fluid`}>
      <div className="row justify-content-center">
        <div className={`${styles["text-container"]} col-sm-8 col-md-7 col-12`}>
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
        <div
          className={`${styles["img-container"]} ${styles["img-container-1"]} col-sm-4 col-md-5 col-8`}
        >
          <BluredFloatingSquare className={styles["bluredSquare-img"]} />
          <img
            src="src\images\Crowd-in-nightclub.png"
            alt="Crowd in nightclub"
          />
        </div>
      </div>
      <SeparatorLine />
      <div className="row justify-content-center">
        <div
          className={`${styles["img-container"]} ${styles["img-container-2"]} col-sm-4 col-md-5 col-8`}
        >
          <BluredFloatingSquare className={styles["bluredSquare-img"]} />
          <img src="src\images\robot-2.png" alt="futuristic robot" />
        </div>
        <div className={`${styles["text-container"]} col-sm-8 col-md-7 col-12`}>
          <h2 className={styles["heading-2"]}>
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
      </div>
    </div>
  );
}

export default About;
