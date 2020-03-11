import React from "react";

import Project from "./Project";
import { Splash, NavBar, Footer } from "../shared";

const Projects = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div id="content">
        <Splash
          titleLines={["What I've Been", "Working On"]}
          imgUrl="/imgs/projects-bg.jpg"
          imgAlt="person coding"
        />
        <div>
          <Project
            name="Chat App"
            techs={[
              "AWS EC2",
              "MongoDB",
              "WebSocket",
              "Express",
              "Node",
              "GraphQL",
              "React Native"
            ]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus sit amet est. At imperdiet dui accumsan sit amet nulla. Ornare arcu dui vivamus arcu felis bibendum ut. Arcu odio ut sem nulla pharetra diam sit. Justo laoreet sit amet cursus sit amet. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Risus viverra adipiscing at in tellus integer feugiat. Ut placerat orci nulla pellentesque dignissim enim sit amet. Sed odio morbi quis commodo odio aenean sed adipiscing. Adipiscing enim eu turpis egestas pretium. Dignissim cras tincidunt lobortis feugiat. Scelerisque viverra mauris in aliquam sem fringilla. Feugiat vivamus at augue eget. Est sit amet facilisis magna etiam tempor orci. Consectetur a erat nam at lectus urna duis convallis convallis. Dis parturient montes nascetur ridiculus mus."
          >
            <div
              className="relative mt-16 w-full h-full flex flex-col items-center"
              style={{ paddingBottom: 300, maxWidth: 300 }}
            >
              <img
                src="/imgs/chat-app-screenshot.png"
                alt="chat app"
                className="absolute bottom-0 right-0"
                style={{
                  transform: "rotate(10deg) translate(10px, 200px)"
                }}
              />
            </div>
          </Project>
          <Project
            name="Tile Quest"
            isDark
            techs={["Unity", "C#"]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus sit amet est. At imperdiet dui accumsan sit amet nulla. Ornare arcu dui vivamus arcu felis bibendum ut. Arcu odio ut sem nulla pharetra diam sit. Justo laoreet sit amet cursus sit amet. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Risus viverra adipiscing at in tellus integer feugiat. Ut placerat orci nulla pellentesque dignissim enim sit amet. Sed odio morbi quis commodo odio aenean sed adipiscing. Adipiscing enim eu turpis egestas pretium. Dignissim cras tincidunt lobortis feugiat. Scelerisque viverra mauris in aliquam sem fringilla. Feugiat vivamus at augue eget. Est sit amet facilisis magna etiam tempor orci. Consectetur a erat nam at lectus urna duis convallis convallis. Dis parturient montes nascetur ridiculus mus."
            githubLink="https://github.com/willyp63/Tile-Quest"
          >
            <div
              className="relative mt-16 w-full h-full flex flex-col items-center"
              style={{ paddingBottom: 300, maxWidth: 550 }}
            >
              <img
                src="/imgs/tile-quest-screenshot.png"
                alt="mimos app"
                className="absolute bottom-0 right-0"
                style={{
                  transform: "rotate(10deg) translate(0px, 50px)"
                }}
              />
            </div>
          </Project>
          <Project
            name="Roulette Simulator"
            techs={["Javascript", "JQuery", "Tailwind.css"]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus sit amet est. At imperdiet dui accumsan sit amet nulla. Ornare arcu dui vivamus arcu felis bibendum ut. Arcu odio ut sem nulla pharetra diam sit. Justo laoreet sit amet cursus sit amet. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Risus viverra adipiscing at in tellus integer feugiat. Ut placerat orci nulla pellentesque dignissim enim sit amet. Sed odio morbi quis commodo odio aenean sed adipiscing. Adipiscing enim eu turpis egestas pretium. Dignissim cras tincidunt lobortis feugiat. Scelerisque viverra mauris in aliquam sem fringilla. Feugiat vivamus at augue eget. Est sit amet facilisis magna etiam tempor orci. Consectetur a erat nam at lectus urna duis convallis convallis. Dis parturient montes nascetur ridiculus mus."
            githubLink="https://github.com/willyp63/willyp63.github.io"
            link="https://willyp63.github.io/"
          >
            <div className="relative mt-16">
              <img
                src="/imgs/roulette-wheel.svg"
                alt="roulette wheel"
                className="roulette-wheel"
                style={{ width: 300, height: 300 }}
              />
              <img
                src="/imgs/roulette-ball.svg"
                alt="roulette wheel"
                className="absolute roulette-ball"
                style={{ bottom: 0, right: 0, width: 300, height: 300 }}
              />
            </div>
          </Project>
          <Project
            name="Mimos"
            isDark
            techs={["Dart", "Flutter", "Node", "Express", "MongoDB"]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus sit amet est. At imperdiet dui accumsan sit amet nulla. Ornare arcu dui vivamus arcu felis bibendum ut. Arcu odio ut sem nulla pharetra diam sit. Justo laoreet sit amet cursus sit amet. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Risus viverra adipiscing at in tellus integer feugiat. Ut placerat orci nulla pellentesque dignissim enim sit amet. Sed odio morbi quis commodo odio aenean sed adipiscing. Adipiscing enim eu turpis egestas pretium. Dignissim cras tincidunt lobortis feugiat. Scelerisque viverra mauris in aliquam sem fringilla. Feugiat vivamus at augue eget. Est sit amet facilisis magna etiam tempor orci. Consectetur a erat nam at lectus urna duis convallis convallis. Dis parturient montes nascetur ridiculus mus."
            githubLink="https://github.com/willyp63/restaurant-payments-ui"
          >
            <div
              className="relative mt-16 w-full h-full flex flex-col items-center"
              style={{ paddingBottom: 300, maxWidth: 300 }}
            >
              <img
                src="/imgs/mimos-screenshot.png"
                alt="mimos app"
                className="absolute bottom-0 right-0"
                style={{
                  transform: "rotate(10deg) translate(10px, 200px)"
                }}
              />
            </div>
          </Project>
          <Project
            name="Foxxie"
            techs={["MongoDB", "Express", "Node", "Angular", "Tailwind.css"]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus sit amet est. At imperdiet dui accumsan sit amet nulla. Ornare arcu dui vivamus arcu felis bibendum ut. Arcu odio ut sem nulla pharetra diam sit. Justo laoreet sit amet cursus sit amet. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Risus viverra adipiscing at in tellus integer feugiat. Ut placerat orci nulla pellentesque dignissim enim sit amet. Sed odio morbi quis commodo odio aenean sed adipiscing. Adipiscing enim eu turpis egestas pretium. Dignissim cras tincidunt lobortis feugiat. Scelerisque viverra mauris in aliquam sem fringilla. Feugiat vivamus at augue eget. Est sit amet facilisis magna etiam tempor orci. Consectetur a erat nam at lectus urna duis convallis convallis. Dis parturient montes nascetur ridiculus mus."
          >
            <div
              className="relative mt-16 w-full h-full flex flex-col items-center"
              style={{ paddingBottom: 290, maxWidth: 400 }}
            >
              <img
                src="/imgs/foxxie.png"
                alt="mimos app"
                className="absolute right-0 foxxie"
                style={{ bottom: -50 }}
              />
            </div>
          </Project>
          <Project
            name="Project Euler"
            isDark
            techs={["Ruby"]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus sit amet est. At imperdiet dui accumsan sit amet nulla. Ornare arcu dui vivamus arcu felis bibendum ut. Arcu odio ut sem nulla pharetra diam sit. Justo laoreet sit amet cursus sit amet. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Risus viverra adipiscing at in tellus integer feugiat. Ut placerat orci nulla pellentesque dignissim enim sit amet. Sed odio morbi quis commodo odio aenean sed adipiscing. Adipiscing enim eu turpis egestas pretium. Dignissim cras tincidunt lobortis feugiat. Scelerisque viverra mauris in aliquam sem fringilla. Feugiat vivamus at augue eget. Est sit amet facilisis magna etiam tempor orci. Consectetur a erat nam at lectus urna duis convallis convallis. Dis parturient montes nascetur ridiculus mus."
            link="https://projecteuler.net/"
            githubLink="https://github.com/willyp63/Project-Euler"
          >
            <div
              className="relative mt-16 w-full h-full flex flex-col items-center"
              style={{ paddingBottom: 265, maxWidth: 350 }}
            >
              <img
                src="/imgs/euler.jpg"
                alt="leonhard euler"
                className="absolute rounded-t-full"
                style={{ bottom: -150, right: 0 }}
              />
            </div>
          </Project>
          <Project
            name="Code Wars"
            techs={["Javascript"]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus sit amet est. At imperdiet dui accumsan sit amet nulla. Ornare arcu dui vivamus arcu felis bibendum ut. Arcu odio ut sem nulla pharetra diam sit. Justo laoreet sit amet cursus sit amet. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Risus viverra adipiscing at in tellus integer feugiat. Ut placerat orci nulla pellentesque dignissim enim sit amet. Sed odio morbi quis commodo odio aenean sed adipiscing. Adipiscing enim eu turpis egestas pretium. Dignissim cras tincidunt lobortis feugiat. Scelerisque viverra mauris in aliquam sem fringilla. Feugiat vivamus at augue eget. Est sit amet facilisis magna etiam tempor orci. Consectetur a erat nam at lectus urna duis convallis convallis. Dis parturient montes nascetur ridiculus mus."
            link="https://www.codewars.com/users/willyp63"
          >
            <div
              className="mt-16 w-full h-full flex flex-col items-center"
              style={{ maxWidth: 350 }}
            >
              <img
                src="/imgs/code-wars.png"
                alt="code wars"
                className="rounded-t-full w-full"
              />
            </div>
          </Project>
          <Project
            name="Fat Bat"
            isDark
            techs={["Objective-C", "Quartz 2D"]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus sit amet est. At imperdiet dui accumsan sit amet nulla. Ornare arcu dui vivamus arcu felis bibendum ut. Arcu odio ut sem nulla pharetra diam sit. Justo laoreet sit amet cursus sit amet. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Risus viverra adipiscing at in tellus integer feugiat. Ut placerat orci nulla pellentesque dignissim enim sit amet. Sed odio morbi quis commodo odio aenean sed adipiscing. Adipiscing enim eu turpis egestas pretium. Dignissim cras tincidunt lobortis feugiat. Scelerisque viverra mauris in aliquam sem fringilla. Feugiat vivamus at augue eget. Est sit amet facilisis magna etiam tempor orci. Consectetur a erat nam at lectus urna duis convallis convallis. Dis parturient montes nascetur ridiculus mus."
            githubLink="https://github.com/willyp63/Fat_Bat"
          >
            <div
              className="relative mt-16 w-full h-full flex flex-col items-center"
              style={{ paddingBottom: 200, maxWidth: 400 }}
            >
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
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Projects;
