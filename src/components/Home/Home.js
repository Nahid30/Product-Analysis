import React from 'react';
import useReview from '../../Hooks/useReview';
import banner from '../../images/banner.jpg';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReview();
    const newReview = [...reviews.slice(0,3)]
    return (
        <div>


            <div className='home-container'>

                <div className="left-side-text">
                    <h1>Choose Your Watches to Buy!</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo sed, ad nostrum adipisci et vel veniam dolor rerum quaerat aperiam praesentium eum saepe ut, unde voluptatibus debitis dolores maxime!</p>

                    <button>Buy Now</button>
                </div>



                <div className='right-side-banner'>
                    <img src={banner} alt="" />
                </div>



            </div>


            <div className='card-container'>
                {
                    newReview.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>

        </div>
    );
};

export default Home;