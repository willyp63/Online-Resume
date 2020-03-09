import React from "react";
import { Splash } from "../shared";

const Contact = () => {
  return (
    <React.Fragment>
      <Splash
        titleLines={["Contact", "Me"]}
        imgUrl="/imgs/contact-me-bg.jpg"
        imgAlt="pen and paper"
      />
      <div className="outer-grid">
        <h2 className="text-5xl">Contact me please</h2>
      </div>
    </React.Fragment>
  );
};

export default Contact;
