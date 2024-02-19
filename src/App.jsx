/* eslint-disable react/prop-types */
import "./App.scss";
import BodyGradientBackground from "./components/BodyGradientBackground";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CreateUserPage from "./components/CreateUserPage";
import LoginPage from "./components/LoginPage";
import AccountRecovery from "./components/AccountRecovery";
import About from "./components/About";

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
        <Link to="create-account">
          <button className="btn btn-primary">Navigate</button>
        </Link>
        <About />
      </div>
      <div></div>
    </div>
  );
}

export default App;
