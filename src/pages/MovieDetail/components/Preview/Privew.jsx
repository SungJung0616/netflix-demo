import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import YouTube from 'react-youtube';
import { useGetMovieVideoQuery } from '../../../../hooks/useGetMovieVideo'; 
import "./privew.style.css"

const Preview = ({ id }) => {
  const { data, isLoading, isError, error } = useGetMovieVideoQuery(id);
  const [show, setShow] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || data.results.length === 0) {
    return <div>No video available</div>;
  }

  const videoId = data.results[0].key;

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="preview">
      <Button variant="primary" className="custom-button" onClick={handleShow}>
        Watch Trailer
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Movie Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-custom">
          <YouTube videoId={videoId} opts={opts} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Preview;
