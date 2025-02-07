import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import '../styles/Cart.css';
import '../styles/buttons.css';
const Cart = ({ cartItems }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);
      setTotal(totalAmount);
    };

    calculateTotal(); 
  }, [cartItems]); 

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <Table className="cart-table" striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3 className="cart-total">Total: ${total}</h3>
      <Button className = "filterbtn">Checkout</Button>
    </div>
  );
}

export default Cart;
