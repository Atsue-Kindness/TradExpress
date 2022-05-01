import React, { useState } from "react";
import tradlogog from "../Images/TradExpress.svg";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="navbar-fixed">
      <div className="navbar">
        <div className="left-side">
          <div className="trad-logo">
            <Link to="/">
              <img src={tradlogog} alt="" />
            </Link>
          </div>
        </div>

        <div className="right-side">
          <div className="links" id={showLinks ? "hidden" : ""}>
            <Link to="/instantbuy">Instant Buy/Sell</Link>
            <a href="https://www.bitcoin.com/" target="_blank">
              Learn
            </a>
            <Link className="btn-1" to="/login">
              Log in
            </Link>
            <Link className="btn-2" to="/getstarted">
              Get started
            </Link>
          </div>
          <button onClick={() => setShowLinks(!showLinks)}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
