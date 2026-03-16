import React from "react";
import Navbar from "../Header/Navbar";
import { Link } from "react-router";
import logo from "../../assets/images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="w-2/3 mx-auto py-25">
        <div className="flex gap-3 justify-center mb-8">
          <img width={35} src={logo} alt="Logo" />
          <h2 className="text-3xl font-extrabold">Phudu</h2>
        </div>
        <div className="border-t-2 border-gray-200"></div>
        <div className="my-8"></div>
        <div className="flex gap-4 justify-center mt-8">
          <a href="https://www.facebook.com" target="_blank">
            <FaFacebook size={25} fill="#1877F2" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram size={25} fill="#f77737" />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <FaLinkedin size={25} fill="#0077B5" />
          </a>
          <a href="https://www.github.com" target="_blank">
            <FaGithub size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
