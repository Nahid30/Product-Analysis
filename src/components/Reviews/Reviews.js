
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReview();



    return (
        <div>


            <h3 className='review-title'>Our Customers Reviews :</h3>

            <div className='card-container'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
            

        </div>
    );
};

export default Reviews;