import React from "react";
import { Splash, NavBar, Footer } from "../shared";

const About = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div id="content">
        <Splash
          titleLines={["My Passions", "& Personality"]}
          imgUrl="/imgs/me-bg.jpg"
          imgAlt="pen and paper"
        />
        <div className="py-16">
          {/* --- Fun Facts --- */}
          <div className="outer-grid flex items-center flex-col-reverse lg:flex-row py-16">
            <div className="pt-8 lg:w-1/2 lg:pt-0 lg:pr-16">
              <h2 className="text-4xl md:text-5xl pb-4">Some fun facts about myself</h2>
              <p className="text-lg md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative pb-1/1 overflow-hidden">
                <img
                  src="/imgs/kickball-team.jpg"
                  alt="cats"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                  }}
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* --- Fun Facts --- */}
          {/* --- Kitties --- */}
          <div className="outer-grid bg-light-gray flex items-center flex-col lg:flex-row py-16">
            <div className="w-full lg:w-1/2">
              <div className="relative flex pb-1/1">
                <div className="absolute w-1/2 top-0 left-0">
                  <div className="relative pb-1/1 overflow-hidden">
                    <img
                      src="/imgs/cats-0.jpg"
                      alt="cats"
                      className="absolute w-full h-full object-cover"
                      style={{
                        clipPath:
                          "polygon(0% 33.33%, 33.33% 0%, 100% 0%, 100% 100%, 0% 100%)"
                      }}
                    />
                  </div>
                </div>
                <div className="absolute w-1/2 top-0 right-0">
                  <div className="relative pb-1/1 overflow-hidden">
                    <img
                      src="/imgs/cats-1.jpg"
                      alt="cats"
                      className="absolute w-full h-full object-cover"
                      style={{
                        clipPath:
                          "polygon(66.66% 0%, 100% 33.33%, 100% 100%, 0% 100%, 0% 0%)"
                      }}
                    />
                  </div>
                </div>
                <div className="absolute w-1/2 bottom-0 left-0">
                  <div className="relative pb-1/1 overflow-hidden">
                    <img
                      src="/imgs/cats-2.jpg"
                      alt="cats"
                      className="absolute w-full h-full object-cover"
                      style={{
                        clipPath:
                          "polygon(33.33% 100%, 0% 66.66%, 0% 0%, 100% 0%, 100% 100%)"
                      }}
                    />
                  </div>
                </div>
                <div className="absolute w-1/2 bottom-0 right-0">
                  <div className="relative pb-1/1 overflow-hidden">
                    <img
                      src="/imgs/cats-3.jpg"
                      alt="cats"
                      className="absolute w-full h-full object-cover"
                      style={{
                        clipPath:
                          "polygon(100% 66.66%, 66.66% 100%, 0% 100%, 0% 0%, 100% 0%)"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8 lg:w-1/2 lg:pt-0 lg:pl-16">
              <h2 className="text-4xl md:text-5xl pb-4">Cats Are Life</h2>
              <p className="text-lg md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          {/* --- Kitties --- */}
          {/* --- Hobbies --- */}
          <div className="outer-grid flex items-center flex-col-reverse lg:flex-row py-16">
            <div className="pt-8 lg:w-1/2 lg:pt-0 lg:pr-16">
              <h2 className="text-4xl md:text-5xl pb-4">What I do in my free time</h2>
              <p className="text-lg md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative pb-1/1 overflow-hidden">
                <img
                  src="/imgs/skiing.jpg"
                  alt="cats"
                  style={{ clipPath: "circle(50% at center)" }}
                  className="absolute w-full h-full object-cover"
                />
                <div
                  className="absolute w-full bg-white"
                  style={{ height: 50 }}
                />
                <div
                  className="absolute w-full bottom-0 bg-white"
                  style={{ height: 50 }}
                />
              </div>
            </div>
          </div>
          {/* --- Hobbies --- */}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default About;
