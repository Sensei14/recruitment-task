import React from "react";

import About from "./About/About";
import Discography from "./Discography/Discography";
import ConcertTours from "./Concert-tours/ConcertTours";
import LatterCompositions from "./Latter-compositions/LatterCompositions";
import Slider from "./Slider/Slider";
import NewTracks from "./New-tracks/NewTracks";

const Views = () => {
  return (
    <>
      <About />
      <Discography />
      <ConcertTours />
      <LatterCompositions />
      <Slider />
      <NewTracks />
    </>
  );
};

export default Views;
