/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import EventItem from "./EventItem";
import styles from "../modules/Category.module.css";
export default function Browse({ category, events, filteredType }) {
  const filterEventsByType = (events, type) => {
    return events.filter((event) => event.type === type);
  };
  const filteredEvenets = filterEventsByType(events, filteredType);
  if (filteredEvenets.length === 0) return;
  return (
    <article className={`mg-bottom-large ${styles.categoryMainContainer}`}>
      <h3 className={`mg-bottom-sm category-heading ${styles.categoryName}`}>
        {category}
      </h3>
      <div className={styles.categoryContainer}>
        <div className={styles.categoryContainerInner}>
          {filteredEvenets.map((event) => {
            return <EventItem addButton={true} key={event.id} event={event} />;
          })}
        </div>
      </div>
    </article>
  );
}
