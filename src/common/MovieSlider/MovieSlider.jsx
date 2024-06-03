import React from 'react'
import './MovieSlider.style.css'
import MovieCard from '../MovieCard/MovieCard';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

const MovieSlider = ({title, movies, responsive}) => {

    
  return (
    <div>
        <h3 className='title'>{title}</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider-p-1"
        containerClass="carousel-container"
        showDots={true}
        responsive={responsive}
        
        dotListClass="custom-dot-list"
        >
        {movies.map((movie,index)=><MovieCard movie={movie} key={index}/>)}
    </Carousel>
      
    </div>
  )
}

export default MovieSlider
