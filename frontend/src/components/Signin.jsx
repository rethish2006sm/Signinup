import React, { useState } from "react";
import axios from "axios";
import { Link , useNavigate } from "react-router-dom";



const Signin = () => {
  const navigate = useNavigate()
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const server_url = "https://signinup-backend.onrender.com";

  const signin = async () => {
    try {
      const res = await axios.post(`${server_url}/login`, {
        email,
        password
      });

      console.log(res.data);
      alert(res.data.message);
      if(res.data.homepage){
        navigate("/home");
        localStorage.setItem("user",JSON.stringify(res.data.user));
      }
      


    } catch (error) {
      alert("Invalid credentials");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[360px]">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Sign In
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={signin}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Sign In
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?
          <Link
            to="/signup"
            className="text-blue-600 ml-1 hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signin;
