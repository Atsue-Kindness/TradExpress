import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import "../App.css";

const Data = () => {
  return (
    <div className="overall-container">
      <div className="data-container">
        <div className="box-1">
          <div className="inner-box">
            <div className="mini-box">
              <h3>BTC/NGN</h3>
              <li>
                <span>-3.21%</span>
                <FaLongArrowAltDown className="down-arrow" />
              </li>
            </div>
            <p>20,560.101.59 NGN</p>
          </div>
          <div className="outer-line"></div>
        </div>

        <div className="box-1">
          <div className="inner-box">
            <div className="mini-box">
              <h3>USDT/NGN</h3>
              <li>
                <span>+10.20%</span>
                <FaLongArrowAltUp className="arrow-up" />
              </li>
            </div>

            <p>20,560.101.59 NGN</p>
          </div>
          <div className="outer-line"></div>
        </div>

        <div className="box-1">
          <div className="inner-box">
            <div className="mini-box">
              <h3>ETH/NGN</h3>
              <li>
                <span>+253</span>
                <FaLongArrowAltUp className="arrow-up" />
              </li>
            </div>

            <p>818,490.32 NGN</p>
          </div>
          <div className="outer-line"></div>
        </div>

        <div className="box-1">
          <div className="inner-box">
            <div className="mini-box">
              <h3>LTC/NGN</h3>
              <li>
                <span>-254</span>
                <FaLongArrowAltDown className="down-arrow" />
              </li>
            </div>

            <p>81,002.32 NGN</p>
          </div>
          <div className="outer-line"></div>
        </div>

        <div className="box-1">
          <div className="box-1">
            <h3>XRP/N</h3>

            <p>226.5€</p>
          </div>
          <div className="outer-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Data;
