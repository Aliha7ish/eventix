/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "../modules/Events.module.css";
import { useEvent } from "../contextAPI/EventsProvider";
import GridCatContainer1R from "../components/GridCatContainer1R";
import EventsCollection from "../components/EventsCollection";
export default function Events() {
  const { trending } = useEvent();
  const virtualEvents = trending.filter((event) => event.isVirtual);
  const RealTimeEvents = trending.filter((event) => !event.isVirtual);
  return (
    <>
      <section className={styles.eventsSection}>
        {/* <GridContainer2R /> */}
        {/* <GridCatContainer1R />   */}
        <EventsCollection />
      </section>
    </>
  );
}
