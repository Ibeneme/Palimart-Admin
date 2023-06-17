import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SignUp from "./Pages/auth/SignUp";
import SignIn from "./Pages/auth/SignIn";
import ForgotPassword from "./Pages/auth/ForgotPassword";
import VerifyEmail from "./Pages/auth/VerifyEmail";

const ScrollToTop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/verifyemail" element={<VerifyEmail/>} />
     
      </Routes>
    </>
  );
}

export default App;
