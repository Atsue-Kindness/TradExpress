import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Buy = (props) => {
  return (
    <div>
      <div className="form">
        <div className="form-page">
          <h2>Buy/Sell Instantly</h2>
          <div className="filter">
            <p className="buy-sell buyuniq">
              {" "}
              <Link to="/instantbuy">Buy</Link>
            </p>
            <p className="buy-sell ">
              <Link to="/sell">Sell</Link>
            </p>
          </div>

          <form action="">
            <div>
              <label for="Coin">Coin to Buy</label>
              <select id="coin" name="coin">
                <option value="Bitcoin (BTC)">Bitcoin (BTC)</option>
                <option value="USDT/NGN">USDT/NGN</option>
                <option value="ETH/NGH">ETH/NGN</option>
                <option value="audi">Audi</option>
              </select>
            </div>

            <div>
              <label for="Currency">Currency</label>
              <select id="Currency" name="Currency">
                <option value="Naira (NGN)">Naira (NGN)</option>
                <option value="Dolar (US)">Dolar (US)</option>
                <option value="Pounds (UK)" selected>
                  Pounds (UK)
                </option>
              </select>
            </div>
            <div>
              <label for="amount">Amount</label>
              <input type="Number" name="amount" id="" placeholder="NGN" />
            </div>
            <div className="down-part">
              <Link to="/dashboard">
                <button>Continue</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Buy;
