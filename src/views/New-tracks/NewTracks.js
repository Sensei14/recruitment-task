import React from "react";
import { Element } from "react-scroll";

import TrackList from "./TrackList";

const NewTracks = () => {
  return (
    <Element name='new-tracks' className='new-tracks'>
      <TrackList />
    </Element>
  );
};

export default NewTracks;
