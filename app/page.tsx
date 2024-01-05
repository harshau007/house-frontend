'use client'
import './globals.css'
import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import Jobs from './components/Jobs';
import jwt  from 'jsonwebtoken';
import cookieCutter from '@boiseitguru/cookie-cutter'
import { useRouter } from 'next/navigation';
import next from 'next';

const Page: any = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter()
  const [isAuth, setAuth] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(()=> {
    const isAuthenticated = () => {
      const token: any = cookieCutter.get('Authorization');
      let value= false;
      try {
        const payload = jwt.verify(token, 'mysecret');
        if(!payload) {
          value = true;
        }
      } catch(err) {
        router.push("/login")
      }
      return value
    } 
    setAuth(isAuthenticated);
  })



  return (
    isAuth ? 
    <div className="app no-scrollbar">
      <Navbar />
      <div className="container mx-auto">
        <SearchBar onSearch={handleSearch} />
        <Jobs />
      </div>
    </div> : useEffect(()=> router.push('/login'))
  );
};

export default Page;
