import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const PopularMovieSlide = () => {  
    const {data,isLoading, isError, error } = usePopularMoviesQuery();
   
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

  return (
    <div>
      <MovieSlider title='Popular Movies' movies={data.results} responsive={responsive}/>
    </div>
  )
}

export default PopularMovieSlide