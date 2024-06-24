/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import EventItem from "./EventItem";
import styles from "../modules/Category.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
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
      <Swiper
        slidesPerView={4.4}
        spaceBetween={12}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        showsPagination={false}
        breakpoints={{
          600: { slidesPerView: 3 },
          875: { slidesPerView: 3.2 },
          1100: { slidesPerView: 3.4 },
          1400: { slidesPerView: 3.6 },
        }}
        className={`slider-container ${styles.categoryMainContainer}`}
      >
        {filteredEvenets.map((event) => {
          return (
            <SwiperSlide key={event.id}>
              <EventItem addButton={true} key={event.id} event={event} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </article>
  );
}
