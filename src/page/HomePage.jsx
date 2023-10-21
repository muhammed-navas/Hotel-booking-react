import React from "react";
import Inputs from "../homeComponent/Inputs";
import SetOfCard from "./SetOfCard";
import Home from "../homeComponent/Home";
import Activities from "../homeComponent/Activities";
import Testimonial from "../homeComponent/Testimonial";
import Hotels from "../homeComponent/Hotels";
import Map from "../homeComponent/Map";
import Follow from "../homeComponent/Follow";


function HomePage() {
  return (
    <div  >
      <Home />
      <Inputs />
      <SetOfCard />
      <Activities />
      <Testimonial />
      <Hotels />
      <Map />
      <Follow />
    </div>
  );
}

export default HomePage;
