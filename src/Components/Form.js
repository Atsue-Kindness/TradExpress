import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="form">
      <div className="form-page">
        <h2>Welcome</h2>
        <div className="filter">
          <p className="buy-sell buyuniq">
            <Link to="/getstarted">Individual</Link>
          </p>
          <p className="buy-sell">
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
            <Link to="/login-b">
              <button>Sign Up</button>
            </Link>
            <p>
              Already have an account? <Link to="login">Click here</Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
