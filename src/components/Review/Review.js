import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Review.css';

const Review = (props) => {

    const { id, name, img, rate, text } = props.review

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={img} alt="" />
            </div>

            <div className='card-text'>
                <h2>{name}</h2>
                <p>{text}</p>
                <p><small>Ratings : {rate}</small> <Rating
                    initialRating={rate}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                    readonly
                ></Rating>
                </p>
            </div>

        </div>
    );
};

export default Review;