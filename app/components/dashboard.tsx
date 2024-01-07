'use client'
import '../globals.css'
import React from 'react';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import Jobs from './Jobs';

const Dashboard: any = () => {
  return (
    <div className="app no-scrollbar">
      <Navbar />
      <div className="container mx-auto">
        <SearchBar/>
        <Jobs />
      </div>
    </div>
  );
};

export default Dashboard;
