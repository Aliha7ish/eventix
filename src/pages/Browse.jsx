/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import EventsCollection from "../components/EventsCollection";
import EventixWordGradient from "../components/EvintexWordGradient";
import FilterTypeButtons from "../components/FilterTypeButtons";
import Category from "../components/Category";
import ListedCategories from "../components/ListedCategories";
import { useEvent } from "../contextAPI/EventsProvider";
import styles from "../modules/Browse.module.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Browse() {
  const { events } = useEvent();
  const [filter, setFilter] = useState("virtual");

  const handleFilter = function (e) {
    setFilter((filter) => (filter = e));
  };

  const categories = events.reduce((acc, event) => {
    const { category } = event;
    const existingCategory = acc.find((item) => item.category === category);
    if (existingCategory) {
      existingCategory.events.push(event);
    } else {
      acc.push({ category, events: [event] });
    }
    return acc;
  }, []);
  return (
    <>
      <section className="mg-top-lg">
        <header className={styles.header}>
          <h2 className={styles.heading2}>Browse</h2>
          <div className={styles.headerFlexContainerInner}>
            <EventixWordGradient className={styles.eventixWord} />
            <FilterTypeButtons
              className={styles.btnsContainer}
              handleFilter={handleFilter}
              left={"virtual"}
              right={"real-time"}
            />
          </div>
        </header>
        <section className={`mg-bottom-large ${styles.listedCategories}`}>
          <h3 className={`mg-bottom-sm category-heading`}>Categories</h3>
          <ListedCategories list={categories} />
        </section>
        <section className={styles.categories}>
          {categories.map((category) => {
            return (
              <Category
                key={category.category}
                category={category.category}
                events={category.events}
                filteredType={filter}
              />
            );
          })}
        </section>
        <Outlet />
      </section>
    </>
  );
}

export default Browse;
