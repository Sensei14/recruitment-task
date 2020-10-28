import React from "react";
import { Element } from "react-scroll";
import Album from "./Album";

import albumsData from "./Albums.json";

const albums = albumsData.albums.map((album) => (
  <Album key={album.id} data={album} />
));

const Discography = () => {
  return (
    <Element name='discography' className='discography'>
      <h1>
        <span>Discography</span>
      </h1>
      <p className='section-description'>
        September 4 world heard Night Visions, the first full album. He reached
        the 2 position in the chart Billboard 200. The single «It's Time» took
        22 th place in the Billboard Hot 100, 4th in the Billboard Alternative
        and Billboard Rock, and now went platinum.
      </p>
      {albums}
    </Element>
  );
};

export default Discography;
