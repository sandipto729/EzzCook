
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Layout/Navbar/Navbar';
import Footer from './Layout/Footer/Footer';

const App = () => {
  return (
   <>
    <Navbar />
    <Outlet />
    <Footer />
   </>
  );
};

export default App;

