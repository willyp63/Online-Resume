import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="relative flex items-center px-32"
      style={{ height: "100vh" }}
    >
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/imgs/developer-bg.jpg"
        alt="person coding"
      ></img>
      <div className="relative">
        <h1 className="font-serif text-white text-8xl leading-none mb-24">
          <span className="text-orange-400 mr-2">A</span>lways
          <br />
          <span className="text-orange-400 mr-2">B</span>e
          <br />
          <span className="text-orange-400 mr-2">C</span>oding
        </h1>
        <Link
          to="/"
          className="transition-all duration-200 border-2 border-orange-500 hover:bg-orange-500 px-8 py-4 text-md text-white hover:text-black"
        >
          HIRE ME TODAY
        </Link>
      </div>
    </div>
  );
};

export default Home;
