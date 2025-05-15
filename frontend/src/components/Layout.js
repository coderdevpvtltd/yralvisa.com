import React from 'react';
import Header from './HomePageComponents/Header';
import Footer from './HomePageComponents/Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
