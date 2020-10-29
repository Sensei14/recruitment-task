import React from "react";

const Track = ({ data: { album, date, title, description, id, img } }) => {
    const trackBg = require(`../../assets/img/new-tracks/${img}`);

    return (
        <div
            className='track'
            style={{ backgroundImage: `url(${trackBg.default})` }}
        >
            <div>
                <span className='track__date'> {date}</span>
                <span className='track__album'>{album}</span>
            </div>
            <span className='track__title'>{title}</span>
            <p className='track__description'>{description}</p>
            <span className='track__number'>0{id}</span>
        </div>
    );
};

export default Track;
