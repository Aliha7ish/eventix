/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./App.scss";
import BodyGradientBackground from "./components/BodyGradientBackground";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import CreateUserPage from "./components/CreateUserPage";
import LoginPage from "./components/LoginPage";
import AccountRecovery from "./components/AccountRecovery";
import About from "./pages/About";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import { EventsProvider } from "./contextAPI/EventsProvider";
import Main from "./pages/Main";
import EventInfoPopUp from "./components/EventInfoPopUp";

export const specialCharacters = /[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
export const passwordValidationRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

function App() {
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
                <Route path="/events/:id" element={<EventInfoPopUp />} />
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
      <BodyGradientBackground width={25} />
    </>
  );
}
export default App;
