/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import EventItem from "./EventItem";
import styles from "../modules/EventsCollection.module.css";

function EventsCollection({ collectionName }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = async function () {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/events", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setEvents(data.results); 
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching events: {error.message}</p>;
  }

  return (
    <article className={`container-fluid ${styles.container}`}>
      <p className={styles.collectionName}>{collectionName}</p>
      <ul>
        {events.map((event) => {
          return <EventItem key={event.id} event={event} />;
        })}
      </ul>
    </article>
  );
}

export default EventsCollection;
