/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useParams, useSearchParams } from "react-router-dom";
import styles from "../modules/CategoryGrid.module.css";
import EventItem from "./EventItem";
export default function CategoryGrid({ categories, categoryParam }) {
  // // Find the selected category
  const selectedCategory = categories.find(
    (category) => category.category === categoryParam
  );

  return (
    <div className={styles.gridContainerOuter}>
      {/* {category} */}
      <h3 className={`mg-bottom-sm category-heading ${styles.categoryName}`}>
        {selectedCategory?.category}
      </h3>
      <div className={styles.gridContainerInner}>
        {selectedCategory?.events.map((event) => {
          return (
            <div key={event.id}>
              <EventItem event={event} addButton={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
