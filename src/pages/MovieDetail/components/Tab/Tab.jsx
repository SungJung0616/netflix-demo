import React, { useState } from 'react';
import ReviewList from '../ReviewList/ReviewList';
import RelatedMovies from '../RelatedMovies/RelatedMovies';
import { useReviewMovieQuery } from '../../../../hooks/useReviewMovie';
import './Tab.style.css';
import { useRelatedMovieQuery } from '../../../../hooks/useRelatedMovies';

const Tab = ({ id }) => {
  const [activeTab, setActiveTab] = useState('reviews');
  const { data: review, isLoading: isReviewLoading } = useReviewMovieQuery(id);
  const { data: related, isLoading: isRelatedLoading } = useRelatedMovieQuery(id); 
  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
           Reviews ({!isReviewLoading && review ? review.results.length : 0})
        </button>
        <button
          className={`tab ${activeTab === 'related' ? 'active' : ''}`}
          onClick={() => setActiveTab('related')}
        >
          Related Movies ({!isRelatedLoading && related ? related.total_results : 0})
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'reviews' ? <ReviewList id={id} /> : <RelatedMovies id={id} />}
      </div>
    </div>
  );
};

export default Tab;
