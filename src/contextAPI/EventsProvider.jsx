/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import AlertMessage from "../components/AlertMessage";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const EventsContext = createContext();
const BASE_URL = "http://127.0.0.1:8000";
const initialState = {
  events: [],
  currentEvent: {},
  loading: true,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "events/fetched":
      return {
        ...state,
        events: action.payload,
        loading: false,
      };
    case "event/got":
      return {
        ...state,
        currentEvent: action.payload,
      };
    case "event/failed":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
  }
}

function EventsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { events, currentEvent, loading, error } = state;
  const fetchEvents = async function () {
    try {
      const response = await fetch(`${BASE_URL}/api/events`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      dispatch({ type: "events/fetched", payload: data.results });
    } catch (error) {
      dispatch({ type: "events/failed", payload: error.message });
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <AlertMessage>{error.message}</AlertMessage>;
  }

  async function getEvent(id) {
    try {
      const res = await fetch(`${BASE_URL}/${id}`);
      const data = await res.json();
      dispatch({ type: "event/got", payload: data });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <EventsContext.Provider
      value={{
        events,
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
