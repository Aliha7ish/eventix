/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import EventItem from "./EventItem";
import styles from "../modules/EventsCollection.module.css";

function EventsCollection({ collection, collectionName }) {
  return (
    <article className="container-fluid">
      <p className={styles.collectionName}>{collectionName}</p>
      <ul>
        {collection.map((event) => {
          return <EventItem key={event.id} event={event} />;
        })}
      </ul>
    </article>
  );
}

export default EventsCollection;
