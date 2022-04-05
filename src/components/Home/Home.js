import React from 'react';
import useReview from '../../Hooks/useReview';
import banner from '../../images/banner.jpg';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReview();
    const newReview = [...reviews.slice(0,3)]
    return (
        <div className='section'>


            <div className='home-container'>

                <div className="left-side-text">
                    <h1>Choose Your Watches!!</h1>
                    <p>You all know that who we are! We provide the Best Product. So Dont be late Buy Your new Exclusive Watchs to Watch Time! Hurry Up!!</p>

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
               <button  className='seeAll-btn'>See all Reviews</button>
            </div>

            
            

        </div>
    );
};

export default Home;