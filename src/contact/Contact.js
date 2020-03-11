import React from "react";
import { Splash, NavBar } from "../shared";

const Contact = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Splash
        titleLines={["Email", "Me"]}
        imgUrl="/imgs/contact-me-bg.jpg"
        imgAlt="pen and paper"
      />
      <div className="outer-grid">
        <h2 className="text-5xl text-center py-16">TODO...</h2>
      </div>
    </React.Fragment>
  );
};

export default Contact;
