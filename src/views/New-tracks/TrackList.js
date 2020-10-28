import React from "react";
import Track from "./Track";

import trackData from "./Tracks.json";

const trackList = trackData.tracks.map((track) => (
    <Track key={track.id} data={track} />
));

const TrackList = () => {
    return <div className='new-tracks__list'>{trackList}</div>;
};

export default TrackList;
