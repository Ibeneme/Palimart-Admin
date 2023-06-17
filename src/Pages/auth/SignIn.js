import React from "react";
import illustration from "../../Components/images/DrawKit-Vector-Illustration-ecommerce-02 1.png";
import "../../Styles/auth.css";
import { FiMail, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-container">
      <div className="White-container">
        <div>
          <img className="illustration" src={illustration} alt="illustration" />
        </div>

        <div className="Container-login-details">
          <form className="">
            <h1 className="text-2xl font-bold text-black">Sign In</h1>
            <p onClick={() => navigate("/signup")}>
              Already have an account?{" "}
              <span className="text-orange-600"> Sign Up</span>{" "}
            </p>

            <div className="container-input-and-label">
              <label>Email Address</label>
              <div className="input-with-icon">
                <input
                  className="auth-input-form"
                  placeholder="Enter your Email Address"
                  type="text"
                />
                <span className="input-icon">
                  <FiMail />
                </span>
              </div>
            </div>
            <div className="container-input-and-label">
              <label>Password</label>
              <div className="input-with-icon">
                <input
                  className="auth-input-form"
                  placeholder="Enter your Password"
                  type="password"
                />
                <span className="input-icon">
                  <FiLock className="icon" />
                </span>
              </div>
              <p
                
                onClick={() => navigate("/forgotpassword")}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: "0.829em",
                  marginTop: "0.2em",
                }}
              >
                Forgot Password?
              </p>
            </div>

            <button
              onClick={() => navigate("/verifyemail")}
              className="auth-button"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
