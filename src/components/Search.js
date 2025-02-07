import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term.trim().toLowerCase()); 
  };

  return (
    <Form>
      <Form.Group controlId="search">
        <Form.Label>Search Products</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Form.Group>
    </Form>
  );
};

export default Search;
