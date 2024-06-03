import React from 'react';
import { useParams } from 'react-router-dom';
import { useDetailMoviesQuery } from '../../hooks/useMovieDetail';
import { Alert, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Tab from './components/Tab/Tab';
import "./MovieDetailPage.style.css";


const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useDetailMoviesQuery(id);
  
  if (isLoading) {
    return (
      <div className='spinner-area'>
        <Spinner 
          animation="border"
          variant='danger'
          style={{width: "5rem", height: "5rem"}}
        />
      </div>
    );    
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
    <div className="movie-detail-container">
      <img 
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}`} 
        alt={data.title} 
        className="movie-poster"
      />
      <div className="movie-info">
        <div className="movie-genres">
          {data.genres.map(genre => (
            <span key={genre.id} className="genre-badge">{genre.name}</span>
          ))}
        </div>
        <h1 className="movie-title">{data.title}</h1>
        {data.tagline && <p className="movie-tagline">{data.tagline}</p>}
        <div className="movie-details">
          <div className="movie-detail-first">
            <FontAwesomeIcon icon={faStar} /> {data.vote_average}     
          
            <span className="badge">Popularity</span> {data.popularity}          
         
            <span className={`badge ${data.adult ? '' : 'yellow'}`}>{data.adult ? "Over 18" : "ALL"}</span>
          </div>
        </div>
        <div className="movie-overview">{data.overview}</div>
        <div className="movie-details">
          <div className="movie-detail-item">
            <span className="badge">Release Date</span> {data.release_date}
          </div>
          <div className="movie-detail-item">
            <span className="badge">Runtime</span> {data.runtime} min
          </div>
          <div className="movie-detail-item">
            <span className="badge">Budget</span> ${data.budget.toLocaleString()}
          </div>
          <div className="movie-detail-item">
            <span className="badge">Revenue</span> ${data.revenue.toLocaleString()}
          </div>
        </div>
      </div>
     
    </div>
       <Tab id={id} />
    </div>
  );
};

export default MovieDetailPage;
