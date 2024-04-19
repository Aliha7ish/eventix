/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useReducer } from "react";

const EventsContext = createContext();
const BASE_URL = "http://localhost:8000";
const initialState = {
  trending: [],
  currentEvent: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "trending/loaded":
      return {
        ...state,
        trending: action.payload,
      };
    case "event/got":
      return {
        ...state,
        currentEvent: action.payload,
      };
  }
}

function EventsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { trending, currentEvent } = state;
  useEffect(function () {
    async function trendingAPI() {
      try {
        const res = await fetch(`${BASE_URL}/trending`);
        const data = await res.json();
        dispatch({ type: "trending/loaded", payload: data });
      } catch (err) {
        console.error(err);
      }
    }
    trendingAPI();
  }, []);

  async function getEvent(id) {
    try {
      const res = await fetch(`${BASE_URL}/trending/${id}`);
      const data = await res.json();
      dispatch({ type: "event/got", payload: data });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <EventsContext.Provider
      value={{
        trending,
        getEvent,
        currentEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}

function useEvent() {
  const event = useContext(EventsContext);
  if (event === undefined)
    throw new Error("context is used by outsider component!");
  return event;
}

export { useEvent, EventsProvider };
