import React, { useState, useEffect } from 'react';
import { useSearchMoviesQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import SortedResults from './components/SortedResult/SortedResult';
import SelectedGenre from './components/SelectedGenre/SelectedGenre';

const MoviePage = () => {
  const [page, setPage] = useState(1);
  const [query] = useSearchParams();
  const [sortOrder, setSortOrder] = useState('popularity.desc');
  const [selectedGenre, setSelectedGenre] = useState(null);
  const keyword = query.get("q");
  const { data, isLoading, isError, error } = useSearchMoviesQuery({ keyword, page });

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  useEffect(() => {    
    setSortOrder('popularity.desc');
    setSelectedGenre(null);
  }, []);

  useEffect(() => {
  }, [page, sortOrder, selectedGenre]);

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handleGenreChange = (genreId) => {
    setSelectedGenre(genreId);
  };

  const sortedResults = data?.results.slice().sort((a, b) => {
    switch (sortOrder) {
      case 'popularity.desc':
        return b.popularity - a.popularity;
      case 'popularity.asc':
        return a.popularity - b.popularity;
      case 'release_date.desc':
        return new Date(b.release_date) - new Date(a.release_date);
      case 'release_date.asc':
        return new Date(a.release_date) - new Date(b.release_date);
      case 'vote_average.desc':
        return b.vote_average - a.vote_average;
      case 'vote_average.asc':
        return a.vote_average - b.vote_average;
      default:
        return 0;
    }
  });

  const filteredResults = selectedGenre
    ? sortedResults?.filter((movie) => movie.genre_ids.includes(selectedGenre))
    : sortedResults;

  if (isLoading) {
    return (
      <div className='spinner-area'>
        <Spinner
          animation="border"
          variant='danger'
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
    );
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
        <div style={{ marginBottom: '15px' }}>
          <SortedResults sortOrder={sortOrder} handleSortChange={handleSortChange} />
          </div>
          <SelectedGenre selectedGenre={selectedGenre} handleGenreChange={handleGenreChange} />
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {filteredResults?.map((movie, index) => (
              <Col key={index} lg={4} xs={12} className="mb-4 d-flex justify-content-center">
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
