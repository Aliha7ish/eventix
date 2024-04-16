/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./App.scss";
import BodyGradientBackground from "./components/BodyGradientBackground";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUserPage from "./components/CreateUserPage";
import LoginPage from "./components/LoginPage";
import AccountRecovery from "./components/AccountRecovery";
import About from "./pages/About";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import { EventsProvider } from "./contextAPI/EventsProvider";

export const specialCharacters = /[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
export const passwordValidationRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="create-account" element={<CreateUserPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<MainPage />} />
          <Route index element={<MainPage />} />
          <Route path="events/:id" element={<Browse />} />
          <Route path="account-recovery-center" element={<AccountRecovery />} />
        </Routes>
      </BrowserRouter>
      <BodyGradientBackground width={25} />
    </>
  );
}

function MainPage() {
  return (
    <div className="main-page">
      <div></div>
      <div>
        {/* <Home />
        <About /> */}
        <EventsProvider>
          <Browse />
        </EventsProvider>
      </div>
      <div></div>
    </div>
  );
}

export default App;
