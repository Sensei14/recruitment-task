import React from "react";
import NavLinks from "./NavLinks";

const SideDrawer = (props) => {
    return (
        <nav className='side-drawer' onClick={props.onClick}>
            <NavLinks />
        </nav>
    );
};

export default SideDrawer;
