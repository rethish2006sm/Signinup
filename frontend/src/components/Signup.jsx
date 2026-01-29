import { useState } from "react";
import axios from "axios";
import { Routes, Route, Link} from "react-router-dom";

const Signup = () => {

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const server_url = "https://signinup-backend.onrender.com";

  const signup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${server_url}/signup`, {
        fullname,
        username,
        email,
        password
      });

      alert(res.data.message);

      setFullname("");
      setUsername("");
      setEmail("");
      setPassword("");

    } catch (error) {
      console.log(error);
      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700">

      <form 
        onSubmit={signup}
        className="bg-white p-8 rounded-2xl shadow-2xl w-[360px]"
      >

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Sign Up
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

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
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Create Account
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?
          <span className="text-blue-600 ml-1 cursor-pointer hover:underline">
            <Link to='/signin'>Login</Link>
          </span>
        </p>

      </form>
    </div>
  );
};

export default Signup;
