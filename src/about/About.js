import React from "react";
import { Splash } from "../shared";

const About = () => {
  return (
    <React.Fragment>
      <Splash
        titleLines={["About", "Me"]}
        imgUrl="/imgs/contact-me-bg.jpg"
        imgAlt="pen and paper"
      />
      <div className="outer-grid">
        <h2 className="text-5xl">About me</h2>
      </div>
    </React.Fragment>
  );
};

export default About;
