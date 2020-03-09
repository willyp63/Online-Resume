import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      id="home"
      className="relative flex items-center outer-grid"
      style={{ height: "100vh" }}
    >
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/imgs/developer-bg.jpg"
        alt="person coding"
      ></img>
      <div className="relative">
        <h1 className="font-serif text-white leading-none mb-16 md:mb-24 text-6xl md:text-7xl lg:text-8xl">
          <span className="text-orange-400 mr-2">A</span>lways
          <br />
          <span className="text-orange-400 mr-2">B</span>e
          <br />
          <span className="text-orange-400 mr-2">C</span>oding
        </h1>
        <Link
          to="/"
          className="transition-colors duration-200 border-2 border-orange-500 hover:bg-orange-500 text-white hover:text-black text-sm px-6 py-4 md:px-8 md:text-base"
        >
          HIRE ME TODAY
        </Link>
      </div>
    </div>
  );
};

export default Home;
