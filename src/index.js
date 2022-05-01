import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./Components/Home";
import Instantbuy from "./Components/Instantbuy";
import Logina from "./Components/Logina";
import Getstarted from "./Components/Getstarted";
// import Pagenotfound from "./Components/Pagenotfound";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Sell from "./Components/Sell";
import Buy from "./Components/Buy";
import Dashboard from "./Components/Dashboard";
import Form from "./Components/Form";
import Business from "./Components/Business";
import Loginb from "./Components/Loginb";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="instantbuy" element={<Instantbuy />} />
          <Route path="login" element={<Logina />} />
          <Route path="login-b" element={<Loginb />} />
          <Route path="getstarted" element={<Getstarted />} />
          <Route path="sell" element={<Sell />} />
          <Route path="buy" element={<Buy />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="individual" element={<Form />} />
          <Route path="business" element={<Business />} />
          {/* <Route path="contact" element={<Pagenotfound />} /> */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
