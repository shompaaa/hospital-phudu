import React from "react";
import { NavLink } from "react-router";
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  // Navbar Link:
   const links = (
    <>
      <NavLink to='/' className='mr-3'>Home</NavLink>
      <NavLink to='/bookings' className='mr-3'>My Bookings</NavLink>
      <NavLink to='/blogs' className='mr-3'>Blogs</NavLink>
      <NavLink to='/contact' className='mr-3'>Contact Us</NavLink>
    </>
  );
  return (
    <div className="navbar bg-gray-100 px-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
          </ul>
        </div>
        <div className="flex gap-3">
            <img width={35} src={logo} alt="Logo" />
            <h2 className="text-3xl font-extrabold">Phudu</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="bg-[#176AE5] px-5 py-2 rounded-2xl text-white">Emergency</a>
      </div>
    </div>
  );
};

export default Navbar;
