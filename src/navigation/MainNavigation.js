import React, { useState } from "react";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../shared/Backdrop";

const MainNavigation = () => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const toggleSideDrawer = () => {
        setShowSideDrawer(!showSideDrawer);
    };

    return (
        <>
            {showSideDrawer && <Backdrop onClick={toggleSideDrawer} />}
            <nav className='main-nav'>
                <button
                    className='main-navigation__menu-btn'
                    onClick={toggleSideDrawer}
                >
                    <span />
                    <span />
                    <span />
                </button>

                {showSideDrawer && <SideDrawer onClick={toggleSideDrawer} />}

                <nav className='main-nav__header'>
                    <NavLinks />
                </nav>
            </nav>
        </>
    );
};

export default MainNavigation;
