import React from 'react'
import reviews from '../json/reviews.json'
import stars from '../images/stars.png'

const Reviews = ({reviews}) => {
  return (
    <div className='reviews w-full'>
        <div className='container'>
            <div className='review'>
                <h2>Reviews</h2>

                <div className='review-content f-jc-sb w-full'>
                    {
                       reviews?.length>0? reviews?.map((review, index) => {
                            return (
                                <div key={index} className='content'>
                                    <div className='f-jc-sb'>
                                        <img src={stars}/>
                                        <small>{review.date}</small>
                                    </div>

                                    <p className='reviewer'>
                                        {review.reviewer}
                                    </p>

                                    <p className='content'>
                                        {review.review}
                                    </p>

                                </div>
                            )
                        }):
                        <p className='text-center text-xl'>
                            No review yet 
                        </p>
                    }

                </div>

            </div>
        </div>
    </div>
  )
}

export default Reviews
