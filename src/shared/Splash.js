import React from "react";

const Splash = ({ titleLines, imgUrl, imgAlt }) => {
  return (
    <div
      id="splash"
      className="relative flex items-center outer-grid"
      style={{ height: "100vh" }}
    >
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={imgUrl}
        alt={imgAlt}
      ></img>
      <h1
        className="relative font-serif text-white leading-tight mb-16 md:mb-24 text-6xl md:text-7xl lg:text-8xl"
        dangerouslySetInnerHTML={{ __html: titleLines.join("<br/>") }}
      ></h1>
    </div>
  );
};

export default Splash;
