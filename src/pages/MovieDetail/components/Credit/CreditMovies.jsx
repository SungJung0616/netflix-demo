import React,{useState} from 'react'
import { useCreditMoviesQuery } from '../../../../hooks/useCreditMovie';
import { Spinner, Alert } from 'react-bootstrap';
import './CreditMovies.style.css'

const CreditMovies = ({id}) => {
    console.log("creditMovies")
    const { data, isLoading, isError, error } = useCreditMoviesQuery(id);
    const [showAll, setShowAll] = useState(false);
    console.log("creditmovies data",data)

    if (isLoading) {
        return (
          <div className="spinner-area">
            <Spinner 
              animation="border"
              variant='danger'
              style={{ width: "3rem", height: "3rem" }}
            />
          </div>
        );
      }
    
    if (isError) {
      return <Alert variant="danger">{error.message}</Alert>;
    }

    const director = data.crew.find(member => member.job === 'Director');

    const castToShow = showAll ? data.cast : data.cast.slice(0, 5);
    
  return (
    <div className="credit-container">
      <h2>Cast</h2>
      <div className="cast-list">
        {director && (
          <div key={director.id} className="cast-member">
            <img 
              src={`https://www.themoviedb.org/t/p/w138_and_h175_face${director.profile_path}`} 
              alt={director.name}
              className="cast-photo"
            />
            <div className="cast-info">
              <p className="cast-name">{director.name}</p>
              <p className="cast-character">Director</p>              
            </div>
          </div>
        )}
        {castToShow.map((member) => (
          <div key={member.cast_id} className="cast-member">
            <img 
              src={`https://www.themoviedb.org/t/p/w138_and_h175_face${member.profile_path}`} 
              alt={member.name}
              className="cast-photo"
            />
            <div className="cast-info">
              <p className="cast-name">{member.name}</p>
              <p className="cast-character">as {member.character}</p>              
            </div>
          </div>
        ))}
      </div>
      {data.cast.length > 5 && (
        <div className="more-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'More'}
        </div>
      )}
    </div>
  )
}

export default CreditMovies
