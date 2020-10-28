import React from "react";
import { Element } from "react-scroll";

import arrowIcon from "../../assets/img/icons/black-arrow.png";

const ConcertTours = () => {
  return (
    <Element name='concert-tours' className='concert-tours'>
      <h1>
        <span>Concert tours</span>
      </h1>
      <p className='section-description'>
        Before the release of Night Visions, Imagine Dragons made appearances on
        American radio and television to promote their extended play, Continued
        Silence and debut single It's Time. The band performed "It's Time" on
        the July 16, 2012 airing of NBC late-night talk show The Tonight Show
        with Jay Leno"
      </p>

      <div className='concert'>
        <div className='concert__section concert__section--title'>
          <span className='concert__start-date'>03.08.2015</span>
          <span className='concert__title'>SMOKE + MIRRORS TOUR</span>
        </div>
        <div className='concert__section'>
          <span className='concert__duration'>2015-present</span>
          <p className='concert__description'>
            At Lollapalooza in Sao Paulo, Brazil, the last date on the Into the
            Night Tour, the band announced a rest, and complemented saying,
            "This is our last show for a while, and had no better place to end
            this tour".[51] The conclusion of the Into the Night Tour signaled
            the end of the Night Visions album cycle. Lead singer Dan Reynolds
            joked about the end of the Night Visions cycle, saying that "We're
            always writing on the road, [so] that second album will come, unless
            we die.
          </p>
          <button className='concert__btn'>
            <span> Buy online</span>
            {arrowIcon && <img src={arrowIcon} alt='arrow' />}
          </button>
        </div>
      </div>
    </Element>
  );
};

export default ConcertTours;
