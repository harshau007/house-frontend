'use client'
import './globals.css'
import React, { useEffect, useState } from 'react';
import axios from './api/axios';
import cookieCutter from '@boiseitguru/cookie-cutter'
import Login from './components/login';
import Dashboard from './components/dashboard';

const Page: any = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    axios.get(
      '/users/verify/token', {
        headers: {
          "Content-Type": "application/json",
          "Authorization": cookieCutter.get('Authorization')
        },
        withCredentials: true
      }
    ).then((res) => res.data)
    .then((data) => {
      console.log(data.isVerified)
      setIsLoggedIn(data.isVerified);
    })        
    .catch(error => {
      console.error(error);
    });
  }, []);

  return (
    isLoggedIn ? <Dashboard/> : <Login/>
  );
};

export default Page;
