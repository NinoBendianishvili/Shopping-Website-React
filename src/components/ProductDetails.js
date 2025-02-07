import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import '../styles/ProductDetails.css'; 
import '../styles/buttons.css';
const ProductDetails = ({ products, addToCart }) => {
  const { id } = useParams();
  console.log('ID from useParams:', id);
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card className="custom-card">
      <Card.Img variant="top" src={product.image} className="card-img-top" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          ${product.price} {product.onSale && <Badge bg="danger">SALE!</Badge>}
        </Card.Text>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="primary" onClick={handleAddToCart} className = "btn">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;
