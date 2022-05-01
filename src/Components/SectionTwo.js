import React from "react";
import appstore from "../Images/Apple play design@300x.png";
import playstore from "../Images/Google play store design@300x.png";
import "../App.css";
import { Link } from "react-router-dom";

const SectionTwo = () => {
  return (
    <div className="Section-two">
      <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
      <h2>Create your account for free and start trading today!</h2>

      <Link to="/getstarted">
        <button>Get started</button>
      </Link>

      <div className="btns2">
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
  );
};

export default SectionTwo;
