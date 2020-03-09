import React from "react";

import Project from "./Project";
import { Splash } from "../shared";

const Projects = () => {
  return (
    <React.Fragment>
      <Splash
        titleLines={["Recent", "Projects"]}
        imgUrl="/imgs/projects-bg.jpg"
        imgAlt="person coding"
      />
      <div>
        <Project
          name="Fat Bat"
          techs={["Objective-C", "Quartz 2D"]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus sit amet est. At imperdiet dui accumsan sit amet nulla. Ornare arcu dui vivamus arcu felis bibendum ut. Arcu odio ut sem nulla pharetra diam sit. Justo laoreet sit amet cursus sit amet. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Risus viverra adipiscing at in tellus integer feugiat. Ut placerat orci nulla pellentesque dignissim enim sit amet. Sed odio morbi quis commodo odio aenean sed adipiscing. Adipiscing enim eu turpis egestas pretium. Dignissim cras tincidunt lobortis feugiat. Scelerisque viverra mauris in aliquam sem fringilla. Feugiat vivamus at augue eget. Est sit amet facilisis magna etiam tempor orci. Consectetur a erat nam at lectus urna duis convallis convallis. Dis parturient montes nascetur ridiculus mus."
          githubLink="https://github.com/willyp63/Fat_Bat"
        >
          <div className="relative h-full w-full" style={{ minHeight: 300 }}>
            <img
              src="/imgs/fat-bat-spikes.png"
              alt="spikes"
              className="absolute"
              style={{ bottom: -158, right: -55 }}
            />
            <img
              src="/imgs/fat-bat.png"
              alt="fat bat"
              className="absolute fat-bat"
              style={{ bottom: 20, right: 275 }}
            />
          </div>
        </Project>
        <Project
          name="Roulette Simulator"
          isDark
          techs={["Javascript", "JQuery", "Tailwind.css"]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus sit amet est. At imperdiet dui accumsan sit amet nulla. Ornare arcu dui vivamus arcu felis bibendum ut. Arcu odio ut sem nulla pharetra diam sit. Justo laoreet sit amet cursus sit amet. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Risus viverra adipiscing at in tellus integer feugiat. Ut placerat orci nulla pellentesque dignissim enim sit amet. Sed odio morbi quis commodo odio aenean sed adipiscing. Adipiscing enim eu turpis egestas pretium. Dignissim cras tincidunt lobortis feugiat. Scelerisque viverra mauris in aliquam sem fringilla. Feugiat vivamus at augue eget. Est sit amet facilisis magna etiam tempor orci. Consectetur a erat nam at lectus urna duis convallis convallis. Dis parturient montes nascetur ridiculus mus."
          githubLink="https://github.com/willyp63/willyp63.github.io"
          link="https://willyp63.github.io/"
        >
          <div className="relative mt-16">
            <img
              src="/imgs/roulette-wheel.svg"
              alt="roulette wheel"
              className="w-64 h-64 roulette-wheel"
            />
            <img
              src="/imgs/roulette-ball.svg"
              alt="roulette wheel"
              className="absolute w-64 h-64 roulette-ball"
              style={{ bottom: 0, right: 0 }}
            />
          </div>
        </Project>
      </div>
    </React.Fragment>
  );
};

export default Projects;
