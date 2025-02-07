import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductGallery from '../components/ProductGallery';
import Filter from '../components/Filter';
import SortMenu from '../components/SortMenu';
import ContactForm from '../components/ContactForm';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import Cart from '../components/Cart';
import Search from '../components/Search'; 
import '../styles.css';
import '../styles/buttons.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ onSale: '', category: '' });

  useEffect(() => {
    axios.get(`http://localhost:5000/products?timestamp=${Date.now()}`)
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        setSortedProducts(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value
    }));
  };

  const applyFilters = () => {
    let filtered = [...products];
    if (filters.onSale) {
      filtered = filtered.filter(product => product.onSale);
    }
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }
    setFilteredProducts(filtered);
    setSortedProducts(filtered);
  };

  const handleSort = (order) => {
    const sorted = [...filteredProducts].sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else if (order === 'desc') {
        return b.price - a.price;
      } else if (order === 'alphaAsc') {
        return a.name.localeCompare(b.name);
      } else if (order === 'alphaDesc') {
        return b.name.localeCompare(a.name);
      } else {
        return 0;
      }
    });
    setFilteredProducts(sorted);
  };

  const addToCart = (product) => {
    setCartItems(prevCartItems => [...prevCartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(prevCartItems =>
      prevCartItems.filter(item => item.id !== productId)
    );
  }

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.trim() === '') {
      setFilteredProducts(products); 
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="home-container">
      <div className="right-panel">
        <SortMenu onSort={handleSort} />
        <div className="filter-container">
          <Filter onFilter={handleFilterChange} />
          <button onClick={applyFilters} className = "filterbtn">Apply Filters</button>
        </div>
        <Search onSearch={handleSearch} />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        <ContactForm />
      </div>
      <div className="left-panel">
        <Routes>
          <Route path="/" element={<ProductGallery products={filteredProducts} addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetails products={products} addToCart={addToCart} />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
