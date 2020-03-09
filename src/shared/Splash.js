import React from "react";

const Splash = () => {
  return (
    <div
      className="relative flex items-center outer-grid"
      style={{ height: "100vh" }}
    >
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/imgs/developer-bg.jpg"
        alt="person coding"
      ></img>
      <h1 className="relative font-serif text-white leading-tight mb-16 md:mb-24 text-6xl md:text-7xl lg:text-8xl">
        Recent
        <br />
        Projects
      </h1>
    </div>
  );
};

export default Splash;
