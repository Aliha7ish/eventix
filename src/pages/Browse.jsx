/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import EventixWordGradient from "../components/EvintexWordGradient";
import FilterTypeButtons from "../components/FilterTypeButtons";
import Category from "../components/Category";
import ListedCategories from "../components/ListedCategories";
import { useEvent } from "../contextAPI/EventsProvider";
import styles from "../modules/Browse.module.css";
import { useState } from "react";
import { Route, Routes, Navigate, useSearchParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import CategoryGrid from "../components/CategoryGrid";
import BookingTicketsForm from "../components/BookingTicketsForm";
import EventDetails from "../components/EventDetails";
import PopUpWindow from "../components/PopUpWindow";

// test popwindow
import { useNavigate } from "react-router-dom";
// ----------------------------------------

function Browse() {
  // Popup test (Can be removed)
  const [showPopup, setShowPopup] = useState(false);
  const { id } = useEvent();
  const navigate = useNavigate();

  const handlePopup = () => {
    if (id) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
      navigate(-1);
    }
  };

  // ---------------------------------------
  const { events } = useEvent();
  const [filter, setFilter] = useState("virtual");
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("cat");

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
        <section className={styles.layout}>
          {categoryParam ? (
            <CategoryGrid
              categories={categories}
              categoryParam={categoryParam}
            />
          ) : (
            <Categories categories={categories} filter={filter} />
          )}
        </section>
        {/* For test pop up window */}

        {/* ------------------------------ */}
        <Outlet />
      </section>
    </>
  );
}

export default Browse;
