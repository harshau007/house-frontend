'use client'
import React, { useState, useEffect } from 'react';
import axios from "../api/axios";
import cookieCutter from '@boiseitguru/cookie-cutter'

const Jobs: any = (job: any) => {
  const [jobs, setJobs] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(
      '/post', {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + cookieCutter.get('Authorization')
        },
        withCredentials: true
      }
    ).then((res) => res.data)
    .then((data) => {
      console.log(data)
      setJobs(data)
      setLoading(false)
    })        
    .catch(error => {
      console.error(error);
    });
  }, [])

  if (isLoading) return <p>Loading...</p>

  return (
    <div className="container mx-auto px-3">
      <div className="grid grid-cols-1 md:grid-cols-4 py-4 gap-y-4 md:gap-x-4">
        {jobs.map(jobs => (
          <div key={jobs['id']} className="bg-[#121212] w-full rounded-lg p-4 text-white">
            <div>
              <h2 className="text-xl font-semibold">{jobs['title']}</h2>
              <p className="text-gray-500 text-sm mt-1">Duration: {jobs['duration']}</p>
              <p className="text-gray-500 text-sm mt-1">Rent: {jobs['rent']}</p>
              <p className="text-gray-500 text-sm mt-1">Location: {jobs['location']}</p>
              <p className="text-gray-500 text-sm mt-1">Created By: {jobs[`createdBy['name']`]}</p>
              <p className="mt-6 text-sm lg:text-justify md:text-center text-justify no-scrollbar" style={{ height: '12rem', overflow: 'scroll' }}>
                {jobs['description']}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
