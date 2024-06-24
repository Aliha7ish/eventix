/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import styles from "../modules/Events.module.css";
import { useEvent } from "../contextAPI/EventsProvider";
import EventixOverlapWord from "../components/EventixOverlapWord";
import ButtonComp from "../components/ButtonComp";
export default function Events() {
  const { events } = useEvent();
  return (
    <>
      <section className={`${styles.eventsSection}`}>
        <div className={styles.container}>
          <div className={styles.containerInner}>
            <header>
              <EventixOverlapWord word="virtual" />
              <ButtonComp
                link="/discover"
                className={`btn-gradient ${styles.headerBtn}`}
              >
                View more
              </ButtonComp>
            </header>
          </div>
          <div className={styles.containerInner}>
            <header></header>
          </div>
        </div>
      </section>
    </>
  );
}
