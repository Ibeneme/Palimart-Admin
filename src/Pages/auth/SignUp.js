import React from "react";
import illustration from "../../Components/images/DrawKit-Vector-Illustration-ecommerce-02 1.png";
import "../../Styles/auth.css";
import { FiMail, FiLock } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";


const SignUp = () => {

    const navigate = useNavigate()
  return (
    <div
    className="auth-container">
      <div className="White-container">
        <div>
          <img 
          className="illustration"
          src={illustration} alt="illustration" />
        </div>

        <div className="Container-login-details">
          <form className="">
            <h1 className="text-2xl font-bold text-black">Sign Up</h1>
            <p onClick={()=>navigate('/signin')}>
              Already have an account?{" "}
              <span className="text-orange-600"> Sign In</span>{" "}
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
        <label>Create Password</label>
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
      </div>
      <div className="container-input-and-label">
        <label>Confirm Password</label>
        <div className="input-with-icon">
          <input
            className="auth-input-form"
            placeholder="Confirm your Password"
            type="password"
          />
          <span className="input-icon">
            <FiLock className="icon" />
          </span>
        </div>
      </div>
            <button  onClick={()=>navigate('/verifyemail')} className="auth-button">Sign Up</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
