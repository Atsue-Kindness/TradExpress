import React from "react";
import Buy from "./Buy";
import Navbar from "./Navbar";
import Sell from "./Sell";

const Instantbuy = () => {
  return (
    <div>
      <Navbar />
      <Buy active="active" normal="normal" />
      {/* <Sell active="active" normal="normal" /> */}
    </div>
  );
};

export default Instantbuy;
