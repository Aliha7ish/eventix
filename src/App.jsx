/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import BodyGradientBackground from "./components/BodyGradientBackground";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUserPage from "./components/CreateUserPage";
import LoginPage from "./components/LoginPage";
import AccountRecovery from "./components/AccountRecovery";
import About from "./pages/About";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import { EventsProvider } from "./contextAPI/EventsProvider";
import Main from "./pages/Main";
import PopUpWindow from "./components/PopUpWindow";
import EventDetails from "./components/EventDetails";
import BookingTicketsForm from "./components/BookingTicketsForm";
import { useEffect, useState, useRef } from "react";

export const specialCharacters = /[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
export const passwordValidationRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

function App() {
  const [pageWidth, setPageWidth] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);
  const [numVerticalRepeats, setNumVerticalRepeats] = useState(0);
  const [numHorizontalRepeats, setNumHorizontalRepeats] = useState(0);
  const [numComponents, setNumComponents] = useState(1);

  console.log(pageHeight, pageWidth);
  useEffect(() => {
    const updatePageSize = () => {
      setPageWidth(document.body.clientWidth);
      setPageHeight(document.body.clientHeight);

      // const horizontalRepeats = Math.ceil(pageWidth / 200);
      // const verticalRepeats = Math.ceil(pageHeight / 200);
      // setNumVerticalRepeats(verticalRepeats);
      // setNumHorizontalRepeats(horizontalRepeats);

      // const totalComponents = numVerticalRepeats + numHorizontalRepeats;

      // setNumComponents(totalComponents);
    };

    window.onload = updatePageSize;

    // Update size on window resize
    window.addEventListener("resize", updatePageSize);

    // Update size whenever the element changes in dom tree
    const observer = new MutationObserver(updatePageSize);
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
    });
    // Cleanup event listener
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  // const gradientArr = Array.from({ length: numComponents }, (_, i) => ++i);
  // console.log(numVerticalRepeats);

  return (
    <>
      <EventsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="create-account" element={<CreateUserPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/" element={<Main />}>
              <Route path="/" index element={<Home />} />
              <Route path="events" element={<Browse />}>
                <Route path="/events/event" element={<PopUpWindow />}>
                  <Route
                    path="/events/event/:id"
                    index
                    element={<EventDetails />}
                  />
                  <Route
                    path="/events/event/:id/form"
                    element={<BookingTicketsForm />}
                  />
                </Route>
              </Route>
              <Route path="about" element={<About />} />
            </Route>
            <Route index element={<Main />} />
            <Route
              path="account-recovery-center"
              element={<AccountRecovery />}
            />
          </Routes>
        </BrowserRouter>
      </EventsProvider>
      {/* {gradientArr.map((comp) => {
        return <BodyGradientBackground key={comp} num={comp} />;
      })} */}
    </>
  );
}
export default App;
