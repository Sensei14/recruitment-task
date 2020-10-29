import React from "react";

import speakerIcon from "../../../assets/img/icons/speaker.png";
import heartIcon from "../../../assets/img/icons/heart.png";
import commentIcon from "../../../assets/img/icons/comment.png";
import shareIcon from "../../../assets/img/icons/share.png";
import arrowIcon from "../../../assets/img/icons/black-arrow.png";

const Composition = ({
    data: {
        album,
        comments,
        date,
        description,
        likes,
        plays,
        shares,
        title,
        video,
    },
}) => {
    return (
        <div className='composition'>
            <div className='composition__section composition__section--left'>
                <div>
                    <span className='composition__date'>{date}</span>
                    <span className='composition__album'>{album}</span>
                </div>
                <span className='composition__title'>{title}</span>
                <p className='composition__description'>{description}</p>

                <div className='composition__controls'>
                    <button className='composition__btn'>
                        <span>Visit the iTunes </span>
                        <img src={arrowIcon} alt='arrow' />
                    </button>
                    <div className='composition__controls--icons'>
                        <span className='composition__controller'>
                            <img src={speakerIcon} alt='speaker' />
                            {plays}
                        </span>
                        <span className='composition__controller'>
                            <img src={heartIcon} alt='heart' />
                            {likes}
                        </span>
                        <span className='composition__controller'>
                            <img src={shareIcon} alt='share' />
                            {shares}
                        </span>
                        <span className='composition__controller'>
                            <img src={commentIcon} alt='comments' />
                            {comments}
                        </span>
                    </div>
                </div>
                <span className='composition__arrow'></span>
            </div>

            <div className='composition__section'>
                <iframe
                    title={title}
                    width='100%'
                    height='100%'
                    src={video}
                    frameBorder='0'
                    allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Composition;
