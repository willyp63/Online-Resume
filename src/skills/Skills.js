import React from "react";
import { Splash } from "../shared";

const Skills = () => {
  return (
    <React.Fragment>
      <Splash
        titleLines={["Check Out", "My Skills"]}
        imgUrl="/imgs/contact-me-bg.jpg"
        imgAlt="pen and paper"
      />
      <div className="outer-grid">
        <h2 className="text-5xl">Skills that kills</h2>
      </div>
    </React.Fragment>
  );
};

export default Skills;
