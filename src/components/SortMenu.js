import React from 'react';
import { Form } from 'react-bootstrap';

const SortMenu = ({ onSort }) => {
  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <Form>
      <Form.Group controlId="sort">
        <Form.Label>Sort Products</Form.Label>
        <Form.Control as="select" onChange={handleSortChange}>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
          <option value="alphaAsc">Alphabetical: A to Z</option>
          <option value="alphaDesc">Alphabetical: Z to A</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
}

export default SortMenu;
