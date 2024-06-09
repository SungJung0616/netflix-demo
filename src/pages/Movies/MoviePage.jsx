import React, { useState } from 'react';
import { useSearchMoviesQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';

const MoviePage = () => {
  // moviepage로 올수 있는 경로는 2가지 
  //1. nav바에서 클릭해서 오는경우 => popular movie 보여주기
  //2. 키워드를 클릭해서 오는경우.=> keyword와 관련있는 영화 보여주기

  //페이지 네이션 설치
  //page state만들기
  //페이지 네이션 클릭할때마다 page 바꿔주기
  //page 값이 바뀔때 마다 useSearchMovie 에 page까지 넣어서 fetch
  const [page, setPage] = useState(1)
  const [query] = useSearchParams();
  const keyword = query.get("q");
  const {data,isLoading, isError, error } = useSearchMoviesQuery({keyword,page});
  console.log("result", data);

  const handlePageClick = ({selected}) => {
    setPage(selected+1)
  }

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

  return(
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          {" "}
          필터{" "}
        </Col>
        <Col lg={8} xs={12}>
          <Row>
          {data?.results.map((movie,index)=>
          <Col key={index} lg={4} xs={12}>
            <MovieCard movie={movie} />
          </Col>
          )} 
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
            forcePage={page-1}
      />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
