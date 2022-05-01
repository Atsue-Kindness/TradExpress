import React from "react";
import appstore from "../Images/get apple play.svg";
import playstore from "../Images/Playstore logo.svg";
import "../App.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="home">
      <div className="home-page">
        <Navbar />
        <div className="header-container">
          <h1>Buy, sell and manage your Crypto on TradExpress.</h1>
          <p>
            Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with
            NGN
          </p>
          <div className="get-started">
            <button>
              <Link to="/getstarted">Get Startes</Link>
            </button>
          </div>

          <div className="btns">
            <a href="https://www.apple.com/store" target="_blank">
              <img src={appstore} alt="Apple store logo" />{" "}
            </a>
            <a
              href="https://play.google.com/store/apps?&utm_source=emea_Med&utm_medium=hasem&utm_content=May2021&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-ng-1001280-Med-hasem-py-Evergreen-May2021-Text_Search_BKWS%7CONSEM_kwid_43700008633186625&gclid=Cj0KCQjw37iTBhCWARIsACBt1Izu9cGNVQtvtiHdyI2NBNZdw0-VJGEpqYIEWbHRn8nVquZ16s_ApXAaAvbWEALw_wcB&gclsrc=aw.ds"
              target="_blank"
            >
              <img src={playstore} alt="Play store logo" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
