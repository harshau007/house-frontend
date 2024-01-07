'use client'
import '../globals.css'
import React from 'react';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';
import Jobs from '../components/Jobs';

const Page: React.FC = () => {

  return (
    <div className="app no-scrollbar">
      <Navbar />
      <div className="container mx-auto">
        <SearchBar />
        <Jobs />
      </div>
    </div>
  );
};

export default Page;
