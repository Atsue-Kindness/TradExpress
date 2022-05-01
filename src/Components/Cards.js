import React from "react";
import dummyimg from "../Images/undraw_bitcoin_p2p_re_1xqa.svg";
import "../App.css";
import photo2 from "../Images/Financial freedom.svg";
import invest from "../Images/investment.svg";

const Cards = () => {
  return (
    <div className="card-marg">
      <div className="card-container">
        <h2>Why do people get involved with Cryptocurrencies?</h2>

        <div className="cards">
          <div className="card-one one">
            <img width={200} src={dummyimg} alt="" />
            <h4>Easy Mode of Payment</h4>
            <p>
              People can now easily send and receive money from anywhere in the
              world to purchase goods and pay for services.
            </p>
          </div>

          <div className="card-one">
            <img width={240} src={photo2} alt="" />
            <h4>Financial Freedom</h4>
            <p>
              Just like the internet no single entity controls the crypto
              network which provides users transparency and privacy, which puts
              you in absolute control of your money
            </p>
          </div>

          <div className="card-one two">
            <img width={165} src={invest} alt="" />
            <h4>Investment</h4>
            <p>
              The constant demand has made Cryptocurrencies a Digital Gold for
              alternative store of wealth on long term investments.
            </p>
          </div>
        </div>

        <a href="https://www.bitcoin.com/" target="blank">
          <button>Learn More</button>
        </a>
      </div>
    </div>
  );
};

export default Cards;
