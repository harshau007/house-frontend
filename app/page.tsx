'use client'
import './globals.css'
import React, { useEffect } from 'react';
import axios from './api/axios';
import cookieCutter from '@boiseitguru/cookie-cutter'
import Login from './components/login';
import Dashboard from './components/dashboard';
import { isLogin, setIsLogin } from '../constant/isLoggedin';

const Page: any = () => {
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
      setIsLogin(data.isVerified);
    })        
    .catch(error => {
      console.error(error);
    });
  }, []);

  return (
    isLogin ? <Dashboard/> : <Login/>
  );
};

export default Page;
