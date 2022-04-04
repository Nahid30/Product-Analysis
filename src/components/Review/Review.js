import React from 'react';
import './Review.css';

const Review = (props) => {

    const {id, name, img, rate, text} = props.review

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={img} alt="" />
            </div>

            <div className='card-text'>
                <h2>{name}</h2>
                <p>{text}</p>
                <p><small>{rate}</small></p>
            </div>

        </div>
    );
};

export default Review;