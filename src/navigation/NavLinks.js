import React from "react";
import { Link } from "react-scroll";

const NavLinks = () => {
  return (
    <ul className='main-nav__links'>
      <li>
        <Link
          activeClass='active'
          to='about'
          spy={true}
          smooth={true}
          duration={500}
        >
          About
          <div className='link-underline'></div>
        </Link>
      </li>

      <li>
        <Link
          activeClass='active'
          to='discography'
          spy={true}
          smooth={true}
          duration={500}
        >
          Discography
          <div className='link-underline'></div>
        </Link>
      </li>

      <li>
        <Link
          activeClass='active'
          to='concert-tours'
          spy={true}
          smooth={true}
          duration={500}
        >
          concert-tours
          <div className='link-underline'></div>
        </Link>
      </li>

      <li>
        <Link
          activeClass='active'
          to='latter-compositions'
          spy={true}
          smooth={true}
          duration={500}
        >
          Latter compositions
          <div className='link-underline'></div>
        </Link>
      </li>

      <li>
        <Link
          activeClass='active'
          to='new-tracks'
          spy={true}
          smooth={true}
          duration={500}
        >
          New tracks
          <div className='link-underline'></div>
        </Link>
      </li>

      <li>
        <Link
          activeClass='active'
          to='upcoming-events'
          spy={true}
          smooth={true}
          duration={500}
        >
          Upcoming events
          <div className='link-underline'></div>
        </Link>
      </li>

      <li>
        <Link
          activeClass='active'
          to='history'
          spy={true}
          smooth={true}
          duration={500}
        >
          History
          <div className='link-underline'></div>
        </Link>
      </li>

      <li>
        <Link
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          duration={500}
        >
          Contact
          <div className='link-underline'></div>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
