import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import TopRateMovieSlide from './components/TopRateMovieSlide/TopRateMovieSlide';
import UpComingMovieSlide from './components/UpComingMovieSlide/UpComingMovieSlide';

const Homepage = () => {
   
  return <div>
        <Banner />
        <PopularMovieSlide />
        <TopRateMovieSlide />
        <UpComingMovieSlide />
        </div>;
};

export default Homepage;
