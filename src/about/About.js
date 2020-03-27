import React from "react";
import { Splash, NavBar, Footer } from "../shared";

const About = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main id="content">
        <Splash
          titleLines={["My Passions", "& Personality"]}
          imgUrl="/imgs/me-bg.jpg"
          imgAlt="pen and paper"
        />
        <div className="py-16">
          {/* --- Fun Facts --- */}
          <div className="outer-grid flex items-center flex-col-reverse lg:flex-row py-16">
            <div className="pt-8 lg:w-1/2 lg:pt-0 lg:pr-16">
              <h2 className="text-4xl md:text-5xl pb-4">
                Some fun facts about myself
              </h2>
              <p className="text-lg md:text-xl">
                I went to Australia once where I developed a fear of peacocks.
                My mom owns a pizza restaurant that I used to work at as a
                teenager (no I can't do the dough tossing thing). Soccer is the
                only sport I will watch on TV. I would love to be a vegan one
                day, but bacon is just too good.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative pb-1/1 overflow-hidden">
                <img
                  src="/imgs/kickball-team.jpg"
                  alt="cats"
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
                    />
                  </div>
                </div>
                <div className="absolute w-1/2 top-0 right-0">
                  <div className="relative pb-1/1 overflow-hidden">
                    <img
                      src="/imgs/cats-1.jpg"
                      alt="cats"
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute w-1/2 bottom-0 left-0">
                  <div className="relative pb-1/1 overflow-hidden">
                    <img
                      src="/imgs/cats-2.jpg"
                      alt="cats"
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute w-1/2 bottom-0 right-0">
                  <div className="relative pb-1/1 overflow-hidden">
                    <img
                      src="/imgs/cats-3.jpg"
                      alt="cats"
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8 lg:w-1/2 lg:pt-0 lg:pl-16">
              <h2 className="text-4xl md:text-5xl pb-4">Cats Are Life</h2>
              <p className="text-lg md:text-xl">
                I'm the proud father of 2 adorable kitties, Mr. Kitty & Oni. I
                adopted Mr. Kitty from a shelter about a year and a half ago,
                and he has been my best friend ever since (he's the chunky one).
                Oni came along about 6 months ago when a coworker found her
                wandering the neighborhood. Oni is the sweetest cat I've ever
                met and I'm currently working on training her to go on
                hikes. If you want to see more of Mr. Kitty and Oni checkout{" "}
                <a
                  class="link"
                  href="https://www.instagram.com/mr_kitty_and_oni/"
                >
                  mr_kitty_and_oni
                </a>{" "}
                on instagram.
              </p>
            </div>
          </div>
          {/* --- Kitties --- */}
          {/* --- Hobbies --- */}
          <div className="outer-grid flex items-center flex-col-reverse lg:flex-row py-16">
            <div className="pt-8 lg:w-1/2 lg:pt-0 lg:pr-16">
              <h2 className="text-4xl md:text-5xl pb-4">
                What I do in my free time
              </h2>
              <p className="text-lg md:text-xl">
                I'm a bit of a blizzard fan boy. I devoted many of my childhood
                years to playing World of Warcraft, and now a days I spend a lot
                of my time playing Hearthstone and Heroes of the Storm
                (blizzard's take on a MOBA). I am almost always participating in
                some sort of adult sports league whether it be volleyball,
                soccer, or kickball. I try to do yoga at least a few times a
                week and I look forward to ever winter when I can hit the slopes
                again ⛷️.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative pb-1/1 overflow-hidden">
                <img
                  src="/imgs/skiing.jpg"
                  alt="cats"
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* --- Hobbies --- */}
        </div>
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default About;
