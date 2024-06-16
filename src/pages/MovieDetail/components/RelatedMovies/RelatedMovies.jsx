import React, { useState } from 'react'
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import MovieCard from '../../../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import { useRelatedMoviePageQuery } from '../../../../hooks/useRelatedMoviesPage';

const RelatedMovies = ({id}) => {
      
    const [page, setPage] = useState(1);
    const {data,isLoading, isError, error } = useRelatedMoviePageQuery(id,page);     
    const handlePageClick = ({ selected }) => {
        setPage(selected + 1);
      };

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
   
       <Container>
        <Row>
          {data?.results.map((movie, index) => (
            <Col key={index} lg={2} xs={12} className="mb-4 d-flex justify-content-center">
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
          containerClassName="pagination justify-content-center mt-4"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={page - 1}
        />
      </Container>
    
  )
}

export default RelatedMovies
