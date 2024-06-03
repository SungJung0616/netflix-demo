import React from 'react';

import { Alert, Spinner} from 'react-bootstrap';
import Review from '../Review/Review';
import "./ReviewList.style.css";
import { useReviewMovieQuery } from '../../../../hooks/useReviewMovie';

const ReviewList = ({ id }) => {
  
  const {data, isLoading, isError, error} =useReviewMovieQuery(id)
  
  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="review-section">
      {data.results.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
