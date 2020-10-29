import React from "react";

const AddCompositionSummary = ({
    toggleSummary,
    handleSubmit,
    data: values,
}) => {
    return (
        <div className='add-composition__summary'>
            <div className='summary-data'>
                <span>Title: </span>
                <span>{values.title}</span>
            </div>

            <div className='summary-data'>
                <span>Album: </span>
                <span>{values.album}</span>
            </div>

            <div className='summary-data'>
                <span>Date: </span>
                <span>{values.date}</span>
            </div>

            <div className='summary-data summary-data--desc'>
                <span>Description: </span>
                <p>{values.description}</p>
            </div>

            <div className='summary-data summary-data--url'>
                <span>Video URL: </span>
                <span>{values.video}</span>
            </div>

            <div className='add-composition__buttons'>
                <button
                    className='add-composition__btn add-composition__btn--cancel'
                    onClick={toggleSummary}
                >
                    Back
                </button>
                <button
                    className='add-composition__btn add-composition__btn--confirm'
                    onClick={() => handleSubmit(values)}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default AddCompositionSummary;
