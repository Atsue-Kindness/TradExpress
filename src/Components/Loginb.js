import React from "react";
import mailing from "../Images/mailing.svg";
import { Link } from "react-router-dom";

const Loginb = () => {
  return (
    <div className="loginbs">
      <div className="form center-these">
        <div className="form-page">
          <div className="login-box">
            <p>You're Almost In!</p>
            <h2>Welcome Back Iretiayo</h2>
          </div>

          <img src={mailing} alt="" className="mailin" />
          <p className="login-paragraph">
            An activation link has been sent to{" "}
            <a href="">Ireti4tech@gmail.com</a> Please click on the link to
            verify your email and activate your TradExpress account.
          </p>

          <div className="down-part button-style-2">
            <Link to="/dashboard">
              <button>Log In</button>
            </Link>
            <p>
              Didn't get an email? Kindly click <a href="">resend email</a>{" "}
              Wrong email supplied? <a href="">Edit email address</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginb;
