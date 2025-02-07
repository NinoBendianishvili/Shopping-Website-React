import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge } from 'react-bootstrap';
import '../styles/ProductGallery.css'; 

const ProductGallery = ({ products, addToCart }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="product-gallery">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price} {product.onSale && <Badge bg="danger">SALE!</Badge>} </p>
          </Link>
          <div className='buttons'>
            <Button as={Link} to={`/product/${product.id}`} variant="primary"  className ="btn">View Details</Button>
            <Button onClick={() => handleAddToCart(product)} className ="btn">Add to Cart</Button>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default ProductGallery;
