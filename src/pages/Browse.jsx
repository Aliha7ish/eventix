/* eslint-disable react/prop-types */

import EventsCollection from "../components/EventsCollection";
import EventixWordGradient from "../components/EvintexWordGradient";
import { useEvent } from "../contextAPI/EventsProvider";
import styles from "../modules/Browse.module.css";
import { Link, Outlet } from "react-router-dom";

function Browse() {
  const { trending } = useEvent();

  return (
    <section>
      <header className={styles.header}>
        <h2>Browse</h2>
        <div>
          <Link to="/">
            <EventixWordGradient className={styles.eventixWord} />
          </Link>
        </div>
      </header>
      <EventsCollection collection={trending} collectionName="trending" />
      <Outlet />
    </section>
  );
}

export default Browse;
