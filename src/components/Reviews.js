import React from 'react'
import reviews from '../json/reviews.json'
import stars from '../images/stars.png'

const Reviews = () => {
  return (
    <div className='reviews'>
        <div className='container'>
            <div className='review'>
                <h2>Reviews</h2>

                <div className='review-content f-jc-sb'>
                    {
                        reviews.map((review, index) => {
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
                        })
                    }

                </div>

            </div>
        </div>
    </div>
  )
}

export default Reviews
