/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import styles from "../modules/Events.module.css";
import { useEvent } from "../contextAPI/EventsProvider";
import EventixOverlapWord from "../components/EventixOverlapWord";
import ButtonComp from "../components/ButtonComp";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import EventItem from "../components/EventItem";
export default function Events() {
  const { events } = useEvent();
  if (!events) return;
  const VirtualEvents = events.filter((event) => event.type === "virtual");
  const RealTimeEvents = events.filter((event) => event.type === "real-time");
  const getRandomEvents = (arr, n) => {
    let result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len) {
      throw new RangeError(
        "getRandomEvents: more elements taken than available"
      );
    }
    while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  };

  const randomUpcomingVirtualEvents = getRandomEvents(VirtualEvents, 4);
  const randomLiveVirtualEvents = getRandomEvents(VirtualEvents, 3);
  const randomRealTimeEvents = getRandomEvents(RealTimeEvents, 3);

  return (
    <>
      <section className={`${styles.eventsSection} padding-left-lg-section`}>
        <div className={styles.container}>
          <div className={styles.containerInner}>
            <header>
              <EventixOverlapWord
                word="virtual"
                className={styles.headerLogo}
              />
              <ButtonComp
                link="/discover"
                className={`btn-gradient ${styles.headerBtn}`}
              >
                View more
              </ButtonComp>
            </header>
            <div className={styles.containerGrid}>
              <div className={styles.liveEvents}>
                <p className={styles.header}>live now</p>
                <div className={styles.slider}>
                  <Swiper
                    direction={"vertical"}
                    slidesPerView={1.2}
                    spaceBetween={15}
                    freeMode={true}
                    scrollbar={true}
                    mousewheel={true}
                    modules={[FreeMode, Scrollbar, Mousewheel]}
                    className={styles.grid1xn}
                  >
                    {randomLiveVirtualEvents.map((event) => {
                      return (
                        <SwiperSlide key={event.id}>
                          <EventItem event={event} liveBadge={true} />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
              <div className={styles.upcomingEvents}>
                <p className={styles.header}>upcoming</p>
                <div className={styles.grid2x2}>
                  {randomUpcomingVirtualEvents.map((event) => {
                    return (
                      <div key={event.id}>
                        <EventItem event={event} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------ */}

          <div className={styles.containerInner}>
            <header>
              <EventixOverlapWord
                word="realtime"
                className={styles.headerLogo}
              />
              <ButtonComp
                link="/discover"
                className={`btn-gradient ${styles.headerBtn}`}
              >
                View more
              </ButtonComp>
            </header>
            <div className={styles.containerGrid}>
              <div className={styles.liveEvents}>
                <div className={styles.slider}>
                  <Swiper
                    direction={"vertical"}
                    slidesPerView={1.2}
                    spaceBetween={15}
                    freeMode={true}
                    scrollbar={true}
                    mousewheel={true}
                    modules={[FreeMode, Scrollbar, Mousewheel]}
                    className={styles.grid1xn}
                  >
                    {randomLiveVirtualEvents.map((event) => {
                      return (
                        <SwiperSlide key={event.id}>
                          <EventItem
                            event={event}
                            addButton={true}
                            liveBadge={true}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
              <div className={styles.upcomingEvents}>
                <div className={styles.grid2x2}>
                  {randomUpcomingVirtualEvents.map((event) => {
                    return (
                      <div key={event.id}>
                        <EventItem event={event} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
