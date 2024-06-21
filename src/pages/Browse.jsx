/* eslint-disable react/prop-types */

// import EventsCollection from "../components/EventsCollection";
import EventixWordGradient from "../components/EvintexWordGradient";
import FilterTypeButtons from "../components/FilterTypeButtons";
// import { useEvent } from "../contextAPI/EventsProvider";
// import { Link, Outlet } from "react-router-dom";
import styles from "../modules/Browse.module.css";

function Browse() {
  // const { trending } = useEvent();

  return (
    <section className="mg-top-lg">
      {/* <header className={styles.header}>
        <h2>Browse</h2>
        <div>
          <Link to="/">
            <EventixWordGradient className={styles.eventixWord} />
          </Link>
        </div>
      </header>
      <EventsCollection collection={trending} collectionName="trending" />
      <Outlet /> */}
      <header className={styles.header}>
        <h2 className={styles.heading2}>Browse</h2>
        <div className={styles.headerFlexContainerInner}>
          <EventixWordGradient className={styles.eventixWord} />
          <FilterTypeButtons className={styles.btnsContainer} />
        </div>
      </header>
    </section>
  );
}

export default Browse;
