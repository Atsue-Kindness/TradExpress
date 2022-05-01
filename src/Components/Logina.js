import React from "react";
import "../App.css";
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Logina = () => {
  return (
    <div>
      <Navbar />
      <div className="form">
        <div className="form-page">
          <div className="add-margin">
            <h2>Welcome Back!</h2>
          </div>

          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <li>
              <div>
                <FaCheckCircle className="check-mark" />
                <span>Remember password</span>
              </div>
              <span>
                <a href="">Forgot password</a>
              </span>
            </li>

            <div className="down-part">
              <Link to="/dashboard">
                <button>Log In</button>
              </Link>
              <p>
                New User? <Link to="/getstarted">Click here</Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Logina;
