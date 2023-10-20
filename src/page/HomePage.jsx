import React from "react";
import Navbar from "../homeComponent/Navbar";
import Inputs from "../homeComponent/Inputs";
import SetOfCard from "./SetOfCard";
import Home from "../homeComponent/Home";
import Activities from "../homeComponent/Activities";
import Testimonial from "../homeComponent/Testimonial";
import Hotels from "../homeComponent/Hotels";
import Map from "../homeComponent/Map";
import Follow from "../homeComponent/Follow";
import Footer from "../homeComponent/Footer";

function HomePage() {
  return (
    <div >
      {/* <Navbar /> */}
      <Home />
      <Inputs />
      <SetOfCard />
      <Activities />
      <Testimonial />
      <Hotels />
      <Map />
      <Follow />
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
