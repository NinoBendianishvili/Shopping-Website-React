import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';
import '../styles/buttons.css';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          ${product.price} {product.onSale && <Badge bg="danger">SALE!</Badge>}
        </Card.Text>
        <Button as={Link} to={`/product/${product.id}`} variant="primary" className = "btn">View Details</Button>
        <Button variant="secondary" onClick={handleAddToCart} className = "btn">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
