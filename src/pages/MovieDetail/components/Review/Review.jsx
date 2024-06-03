import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "./Review.style.css";

const Review = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);
  const MAX_LENGTH = 300;

  return (
    <div className="review-item">
      <h5>{review.author}</h5>
      <p>
        {isExpanded || review.content.length <= MAX_LENGTH
          ? review.content
          : `${review.content.substring(0, MAX_LENGTH)}...`}
      </p>
      {review.content.length > MAX_LENGTH && (
        <Button variant="link" onClick={toggleExpand}>
          {isExpanded ? '..Show Less' : '..More'}
        </Button>
      )}
    </div>
  );
};

export default Review;
