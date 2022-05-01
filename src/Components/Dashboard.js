import React from "react";
import "../App.css";
import tradexlogo from "../Images/TradExpress.svg";
import { RiDashboardFill } from "react-icons/ri";
import { MdAccountBalanceWallet } from "react-icons/md";
import { RiExchangeDollarFill } from "react-icons/ri";
import { HiPencilAlt } from "react-icons/hi";
import { FaBlog } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { BiMenuAltLeft } from "react-icons/bi/";
import { BsFillBellFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { RiLuggageDepositFill } from "react-icons/ri";
import bitcoin from "../Images/bitcoin.svg";

const Dashboard = () => {
  return (
    <div className="dashboard-grid">
      <div className="topside">
        <div className="logo-boxx">
          <img src={tradexlogo} alt="" />
        </div>
        <div className="meni-iconss1">
          <BiMenuAltLeft size={35} />
        </div>
        <div className="menu-iconss-2">
          <BsFillBellFill size={30} />
          <BsFillBellFill className="not-visible" size={30} />
          <BsFillBellFill className="not-visible" size={30} />
        </div>
      </div>

      <div className="dash-left-side">
        <div className="dashboard-items">
          <ul>
            <li>
              <RiDashboardFill size={30} className="dashboard-icons" />
              <span>Dashboard</span>
            </li>
            <li>
              <MdAccountBalanceWallet size={30} className="board-icons" />
              <span>Wallet</span>
            </li>
            <li>
              <RiExchangeDollarFill size={30} className="board-icons" />
              <span>Exchange Rate</span>
            </li>
            <li>
              <HiPencilAlt size={30} className="board-icons" />
              <span>Learn</span>
            </li>
            <li>
              <FaBlog size={30} className="board-icons" />
              <span>Blog</span>
            </li>
            <li>
              <FaUserCircle size={30} className="board-icons" />
              <span>Profile</span>
            </li>
            <li>
              <AiTwotoneSetting size={30} className="board-icons" />
              <span>Settings</span>
            </li>
            <li>
              <RiLogoutBoxRFill size={30} className="board-icons" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <button>Contact support</button>
      </div>

      <div className="dash-right-side">
        <div className="right-everythig">
          <div className="dash-right-one">
            <div className="wallet">
              <h4>Wallet Balance</h4>
              <p>
                121,546.32 <span>NGN</span>
              </p>
            </div>
            <div className="deposit">
              <ul>
                <li>
                  <GiReceiveMoney className="deposit-icons" size={35} />
                  <span>NGN Deposit</span>
                </li>
                <li>
                  <RiLuggageDepositFill className="deposit-icons" size={35} />
                  <span>NGN Withdrawal</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="dash-right-two">
            <h3>Crypto Wallet Balance</h3>
            <div className="scroll-boxes">
              <div className="bitcoin">
                <div>
                  <p>Bitcoin</p>
                  <p>1.625 BTC</p>
                </div>
                <img src={bitcoin} alt="" />
              </div>

              <div className="bitcoin">
                <div>
                  <p>USDT</p>
                  <p>$2,257.57</p>
                </div>
                <img src={bitcoin} alt="" />
              </div>

              <div className="bitcoin">
                <div>
                  <p>Bitcoin</p>
                  <p>1.625 BTC</p>
                </div>
                <img src={bitcoin} alt="" />
              </div>

              <div className="bitcoin">
                <div>
                  <p>Bitcoin</p>
                  <p>1.625 BTC</p>
                </div>
                <img src={bitcoin} alt="" />
              </div>

              <div className="bitcoin">
                <div>
                  <p>Bitcoin</p>
                  <p>1.625 BTC</p>
                </div>
                <img src={bitcoin} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
