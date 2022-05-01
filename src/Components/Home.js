import React from "react";
import Header from "./Header";
import Data from "./Data";
import Cards from "./Cards";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <Data />
      <Cards />
      <SectionOne />
      <SectionTwo />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home
