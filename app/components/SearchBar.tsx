"use client";
import React, { useState } from "react";
import axios from "../api/axios";
import Jobs from "./Jobs";
import cookieCutter from '@boiseitguru/cookie-cutter'

interface SearchBarProps {
  onSearch: (query: string, jobType1: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [jobType1, setJobType1] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleSearch1 = () => {
    onSearch(query, jobType1);
  };

  //post/search/query?search=Delhi&sort=desc

  const handleSearch: React.FormEventHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `/post/search/query?search=${query}&sort=${jobType1}`,
        {
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
      })
    } catch (err) {
      console.log(err);
    }
  };
  
  <Jobs job={jobs}/>

  return (
    <div className="mt-40 mb-10 lg:bg-[#121212] p-4 h-auto md:h-72 sm:h-72 flex flex-col justify-center rounded-lg items-center">
      <div
        className="relative w-full md:w-[60rem] rounded-lg bg-[#333]"
        style={{ marginTop: "-100px" }}
      >
        <input
          type="text"
          placeholder="Search for job..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 w-full md:w-[60rem] bg-[#676464] rounded-lg h-16 outline-none"
        />
        <button
          onClick={handleSearch}
          className="absolute lg:right-5 right-2 top-2 bg-[#242121] text-white py-3 px-10 rounded-lg border-none hover:bg-[#282727] transition-transform transform hover:scale-105 active:scale-95"
        >
          Search
        </button>
      </div>
      <div className="flex flex-row mt-4 space-x-4">
        <select
          value={jobType1}
          onChange={(e) => setJobType1(e.target.value)}
          className="px-4 w-36 h-10 md:w-60 bg-[#333] text-white rounded-lg outline-none"
        >
          <option value="">Sort</option>
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
