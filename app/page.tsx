'use client'
import './globals.css'
import React, { useEffect, useState } from 'react';
import axios from './api/axios';
import cookieCutter from '@boiseitguru/cookie-cutter'
import Login from './components/login';
import Dashboard from './components/dashboard';
import { useBetween } from 'use-between';
import shareableLogginState from './constant/loggin';

const Page: any = () => {
  const { isLoggedIn, setIsLoggedIn } = useBetween(shareableLogginState);

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
