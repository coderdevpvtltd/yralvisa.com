import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page Imports
import HomePage from './pages/HomePage';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';
import ProductPage from './pages/ProductPage';

import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/careers" element={<Layout><CareersPage /></Layout>} />
         <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
         <Route path="/product-page" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;