import React from "react";
import illustration from "../../Components/images/forgot.png";
import "../../Styles/auth.css";
import { FiMail } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-container">
      <div className="White-container">
        <div>
          <img className="illustration" src={illustration} alt="illustration" />
        </div>

        <div className="Container-login-details">
          <form className="">
            <h1 className="text-2xl font-bold text-black">Verify Email </h1>
            <p>Please check your mail for a One time password - OTP</p>

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

            <p
              onClick={() => navigate("/verifyemail")}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                fontSize: "0.829em",
                marginTop: "0.2em",
              }}
            >
              Didn't get an OTP? Resend
            </p>
            <button
              onClick={() => navigate("/verifyemail")}
              className="auth-button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
