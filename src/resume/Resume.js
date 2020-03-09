import React from "react";
import { Splash } from "../shared";

const Resume = () => {
  return (
    <React.Fragment>
      <Splash
        titleLines={["Resume"]}
        imgUrl="/imgs/contact-me-bg.jpg"
        imgAlt="pen and paper"
      />
      <div className="outer-grid">
        <h2 className="text-5xl">Resume</h2>
      </div>
    </React.Fragment>
  );
};

export default Resume;
