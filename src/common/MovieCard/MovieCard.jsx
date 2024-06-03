import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'react-bootstrap'
import "./MovieCard.style.css"
import { useGenreMoviesQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movie}) => {
  
  const { data: genreData, isLoading } = useGenreMoviesQuery(); 
  
  const navigate = useNavigate();
  const showGenre = (genreIdList) =>{
    if (isLoading || !genreData) return [];
    if (!genreIdList) return [];

    const gerneNameList = genreIdList.map((id)=>{
      const genreObj = genreData.find((genre)=>genre.id===id);
      return genreObj ? genreObj.name : "Unknown Genre";
    })

    return gerneNameList
  }

  const handleCardClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div style={{
        backgroundImage : 
            "url("+
            `http://www.themoviedb.org/t/p/w600_and_h600_bestv2${movie.poster_path}`+
            ")"}}
        className='movie-card'
        onClick={handleCardClick}

    >
      <div className="overlay">
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <div className="genres">
            {showGenre(movie.genre_ids).map((id, index) => (
              <Badge bg="danger"className="genre-badge" key={index}>{id}</Badge>
            ))}
          </div>
          <div className="movie-detail">
            <span className="vote">
              <FontAwesomeIcon icon={faStar} /> {movie.vote_average}
            </span>
            <span className="popularity">
              <FontAwesomeIcon icon={faUser} /> {movie.popularity}
            </span>
            <Badge bg={movie.adult ? 'danger' : 'warning'} className="age">
                {movie.adult ? "Over 18" : "ALL"}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
