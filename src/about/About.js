import React from "react";
import { Splash, NavBar } from "../shared";

const About = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Splash
        titleLines={["My Passions", "& Personality"]}
        imgUrl="/imgs/me-bg.jpg"
        imgAlt="pen and paper"
      />
      <div className="outer-grid">
        <h2 className="text-5xl text-center py-16">TODO...</h2>
      </div>
    </React.Fragment>
  );
};

export default About;
