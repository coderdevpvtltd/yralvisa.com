import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page Imports
import HomePage from './pages/HomePage';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';
import ProductPage from './pages/ProductPage';
import SecurityPage from './pages/SecurityPage';
import AdminCardsPage from './pages/AdminCardsPage';
import AdminBlogsPage from './pages/AdminBlogsPage';
import Registration from './pages/Auth/Registration';
import AuthLayout from './components/Authlayout';
import Login from './pages/Auth/Login';
import SchengenAppointmentChecker from './pages/SchengenAppointmentChecker'
import CardDetailedPage from './pages/CardDetailedPage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/careers" element={<Layout><CareersPage /></Layout>} />
        <Route path="/schengenAppointment-checker"element={<Layout><SchengenAppointmentChecker /></Layout>} />
        <Route path="/CardDetailedPage"element={<Layout><CardDetailedPage /></Layout>} />
         <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
         <Route path="/register" element={
        <AuthLayout>
          <Registration />
        </AuthLayout>
      } />
      
      <Route path="/login" element={
        <AuthLayout>
          <Login />
        </AuthLayout>
      } />
         <Route path="/product-page" element={<ProductPage />} />
         <Route path="/security" element={<SecurityPage />} />
         <Route path="/admin/cards" element={<AdminCardsPage />} />
         <Route path="/admin/blogs" element={<AdminBlogsPage />} />
      </Routes>
    </Router>
  );
}

export default App;