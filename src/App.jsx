/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

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
import PageNotFound from "./pages/PageNotFound";
import CategoryGrid from "./components/CategoryGrid";
import BootPopUp from "./components/BootPopUp";
import Events from "./pages/Events";
export const specialCharacters = /[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
export const passwordValidationRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

function App() {
  return (
    <>
      <EventsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/temp" element={<BootPopUp />} />
            <Route path="/create-account" element={<CreateUserPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/discover" element={<Browse />} />
            <Route path="/" element={<Main />}>
              <Route path="/home" element={<Home />} />
              {/* ----------------------------------- */}
              {/* event details will be displayed conditionally */}
              {/* ----------------------------------- */}
              {/* <Route path="/discover/:id" element={<EventDetails />} />
                <Route
                  path="/discover/:id/book-event"
                  element={<BookingTicketsForm />}
                /> */}
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
            </Route>
            <Route index element={<Main />} />
            <Route
              path="/account-recovery-center"
              element={<AccountRecovery />}
            />
          </Routes>
        </BrowserRouter>
      </EventsProvider>
    </>
  );
}
export default App;
