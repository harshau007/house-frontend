"use client";
import axios from "../api/axios";
import  React, { useState } from "react";
import Navbar from "../components/Navbar";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const router = useRouter()
  const handleSubmit: React.FormEventHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/users/signin",
        {
          password: password,
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true
        }
      );
      Cookies.set('Authorization',response.headers['authorization'],{ sameSite: 'none', secure: true, path: '/' });
      if(response.data.accessToken) {
        setTimeout(()=> {
          router.push('/')
        },1000)
      }
      console.log(response)
    } catch (err) {
      console.log(err);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  return (
    <>
    <Navbar/>
    <section className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center bg-[#121212] p-7 max-w-md flex-col gap-4 rounded-lg">
        <p className="text-2xl font-medium">SIGN IN</p>
        <form onSubmit={handleSubmit}>
          <p className="text-lg mb-2">Email</p>
          <input
            className="rounded-md bg-[#333] p-2 outline-none w-full mb-3"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <p className="text-lg mb-2">Password</p>
          <input
            className="rounded-md bg-[#333] p-2 outline-none w-full mb-5"
            onChange={(e) => setPass(e.target.value)}
          ></input>
          <button className="bg-[#333] w-full rounded-lg p-2 hover:bg-white hover:text-[#121212] transition-colors">
            Login
          </button>
        </form>
          <h1>Don't have an account ?   <a href="/signup" className="hover:text-blue-200">Create Account</a></h1>
      </div>
    </section>
    </>
  );
};
export default Page;
