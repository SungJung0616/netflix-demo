import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRateMovies';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';

const TopRateMovieSlide = () => {
    const {data,isLoading, isError, error } = useTopRatedMoviesQuery();
 
    if(isLoading){
      return(
        <div className='spinner-area'>
          <Spinner 
            animation="border"
            variant='danger'
            style={{width: "5rem", height: "5rem"}}
          />
        </div>
      )
    }

    if(isError){
        <Alert variant="danger">{error.message}</Alert>
    }

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          
        }
      };

  return (
    <div>
        <MovieSlider title='Top Rated Movies' movies={data.results} responsive={responsive}/>
    </div>
  )
}

export default TopRateMovieSlide
