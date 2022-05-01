import React from "react";
import Form from "./Form";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Business = () => {
  return (
    <div>
      <Navbar />
      <div className="form">
        <div className="form-page">
          <h2>Welcome</h2>
          <div className="filter">
            <p className="buy-sell">
              <Link to="/getstarted">Individual</Link>
            </p>
            <p className="buy-sell buyuniq">
              <Link to="/business">Business</Link>
            </p>
          </div>

          <form action="">
            <input type="text" placeholder="Username" />
            <input type="text" name="fullName" id="" placeholder="Full Name" />
            <input type="email" name="email" id="" placeholder="Email" />
            <input type="number" placeholder="Phone Number" />
            <input
              type="number"
              name="referral"
              placeholder="Referral Code (optional)"
            />
            <p className="terms">
              By clicking the Sign Up button below, you agree to TradExpress{" "}
              <a href="">terms and service</a>{" "}
            </p>
            <div className="down-part">
              <a href="">
                <button>Sign Up</button>
              </a>
              <p>
                Already have an account? <a href="">Click here</a>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Business;
