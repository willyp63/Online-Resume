import React from "react";
import { Splash } from "../shared";

const Blog = () => {
  return (
    <React.Fragment>
      <Splash
        titleLines={["Blog"]}
        imgUrl="/imgs/contact-me-bg.jpg"
        imgAlt="pen and paper"
      />
      <div className="outer-grid">
        <h2 className="text-5xl">Blog</h2>
      </div>
    </React.Fragment>
  );
};

export default Blog;
