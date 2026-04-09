import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const logout = ()=>{
    localStorage.removeItem("user")
  }

  return (
    <div className="h-screen w-full">
      {/* Background */}
      <div className="h-full w-full bg-[#8994c9]">
        {/* Navbar */}
        <div className="w-full h-20 bg-[#c9cbde] flex items-center px-10">
          {/* Logo */}
          <div className="text-5xl font-bold">Start-UP</div>

          {/* Menu */}
          <div className="ml-auto flex gap-10 font-bold">
            <button className="hover:text-blue-600 transition cursor-pointer">
              Home
            </button>

            <button className="hover:text-blue-600 transition cursor-pointer">
              <Link to="/signup">SignUp</Link>
            </button>

            {/* logout */}
            <button className="hover:text-blue-600 transition cursor-pointer" onClick={logout}>
              <Link to="/">Log out</Link>
            </button>
          </div>
        </div>

        <center>
          <div className="w-96 bg-white rounded-md mt-10 font-bold">
            {" "}
            User-details
            <p >Name:{user.fullname}</p>
            <p >username:{user.username}</p>
            <p >Password:{user.password}</p>
            <p >email:{user.email}</p>
            
          </div>
        </center>
      </div>
    </div>
  );
};

export default Home;
