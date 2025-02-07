import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/Filter.css'; 

const Filter = ({ onFilter, onApplyFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilter(name, value); 
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="filterOnSale">
          <Form.Label>Filter by Sale</Form.Label>
          <Form.Control as="select" name="onSale" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="onSale">On Sale</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="filterCategory">
          <Form.Label>Filter by Category</Form.Label>
          <Form.Control as="select" name="category" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="t-shirt">T-Shirt</option>
            <option value="totebag">Totebag</option>
            <option value="keychain">Keychain</option>
            <option value="sticker">Sticker</option>
            <option value="mug">mug</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Filter;
