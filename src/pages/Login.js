import React from 'react';
import { Form, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Login.css'; 
const Login = () => {
  const handleLogIn = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleLogIn} className="login-form">
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <button type="submit" className="login-button">Login</button>
      <Link to="/signup">
        <Button variant="primary" type="button">Sign Up</Button>
      </Link>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <Button variant="primary" type="button">Log in with Facebook</Button>
      </a>
      <a href="https://mail.google.com/mail/u/0/" target="_blank" rel="noopener noreferrer">
        <Button variant="primary" type="button">Log in with Email</Button>
      </a>
    </Form>
  );
}

export default Login;
