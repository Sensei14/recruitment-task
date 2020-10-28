import React from "react";

const Album = ({
  data: { title, year, description, longTitle, buttonBackground, textColor },
}) => {
  const buttonBg = require(`../../assets/img/discography/${buttonBackground}`);

  return (
    <div className='album'>
      <div className='album__section album__section--title'>
        <span className='album__year'>{year}</span>
        <span className='album__title'>{title}</span>
      </div>
      <div className='album__section album__section--desc'>
        <span className='album__long-title'> {longTitle}</span>
        <p className='album__description'>{description}</p>
        <div
          className='album__play'
          style={{
            backgroundImage: `url(${buttonBg.default})`,
            color: `${textColor}`,
          }}
        >
          PLAY
        </div>
      </div>
    </div>
  );
};

export default Album;
