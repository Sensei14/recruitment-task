import React, { useState } from "react";
import { Element } from "react-scroll";
import CompositionsList from "./components/CompositionsList";
import AddComposition from "./components/AddComposition";

const LatterCompositions = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <>
            <AddComposition show={showForm} close={toggleForm} />
            <Element name='latter-compositions' className='latter-compositions'>
                <h1>
                    <span>Latter compositions</span>
                </h1>
                <p className='section-description'>
                    "It's Time" was released as the lead single from Continued
                    Silence and It's Time, both extended plays preceding Night
                    Visions' release.
                </p>

                <button className='add-composition' onClick={toggleForm}>
                    ADD
                </button>

                <CompositionsList />
            </Element>
        </>
    );
};

export default LatterCompositions;
