import React from 'react';
import { useGenreMoviesQuery } from '../../../../hooks/useMovieGenre';
import './selectedGenre.style.css';

const SelectedGenre = ({ selectedGenre, handleGenreChange }) => {
  const { data: genreData, isLoading, isError, error } = useGenreMoviesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="genre-container">
      <h2>Genres</h2>
      <div className="genre-buttons">
        {genreData.map((genre) => (
          <button
            key={genre.id}
            className={`genre-button ${selectedGenre === genre.id ? 'selected' : ''}`}
            onClick={() => handleGenreChange(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectedGenre;
