'use client'
import '../globals.css'
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import Jobs from './Jobs';

const Dashboard: any = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="app no-scrollbar">
      <Navbar />
      <div className="container mx-auto">
        <SearchBar onSearch={handleSearch} />
        <Jobs />
      </div>
    </div>
  );
};

export default Dashboard;
