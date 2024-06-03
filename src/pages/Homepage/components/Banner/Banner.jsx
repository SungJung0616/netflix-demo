import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import "./Banner.style.css";
import { useNowplayingMoviesQuery } from '../../../../hooks/useNowPlaying';

const Banner = () => {

    const { data, isLoading, isError, error } = useNowplayingMoviesQuery();
    
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
    <div style={{
        backgroundImage : 
            "url("+
            `http://www.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].poster_path}`+
            ")"}}
        className="banner"
    >
      <div className="banner-text-area">
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].overview}</p>
      </div>
    </div>
  )
}

export default Banner
