import React from 'react';
import { Dropdown } from 'react-bootstrap';
import "./sortedResults.style.css"

const SortedResults = ({ sortOrder, handleSortChange }) => {
  return (
    <div id="sorted-results-dropdown">
      <Dropdown onSelect={handleSortChange}>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Sort Results By
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="popularity.desc">Popularity (Desc)</Dropdown.Item>
          <Dropdown.Item eventKey="popularity.asc">Popularity (Asc)</Dropdown.Item>
          <Dropdown.Item eventKey="release_date.desc">Release Date (Desc)</Dropdown.Item>
          <Dropdown.Item eventKey="release_date.asc">Release Date (Asc)</Dropdown.Item>
          <Dropdown.Item eventKey="vote_average.desc">Rating (Desc)</Dropdown.Item>
          <Dropdown.Item eventKey="vote_average.asc">Rating (Asc)</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SortedResults;
