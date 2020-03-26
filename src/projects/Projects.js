import React from "react";

import Project from "./Project";
import { Splash, NavBar, Footer } from "../shared";

const DESCRIPTIONS = {
  CHAT_APP: `
    Next2Me is a startup idea I've been working on with a couple friends. I recently quit my job, which gave my the opportunity
    to jump in head first and take the lead on the tech side.
    <br/><br/>
    We have two server projects, a GraphQL Rest API and a WebSocket messaging API .
    Both share a custom NPM package that allows them to connect to the same MongoDB database.
    We initially wanted to host on Heroku because of simplicity, but soon realized even their professional plans were tapping out at just a few hundred simultaneous WebSocket connnections.
    That lead us to AWS, where I took on the task of deploying everything to EC2 instances.
    Once successfully deployed, we were able to make improvements such as: disabling Node garbage collection and running it at our determined intervals and
    selecting hardware specialized for network connections for our messaging server. After that, we were able to hit 2000+ simultaneous connections pretty comfortably while paying the same price we were on Heroku
    (check out this <a class="link" href=\"https://blog.jayway.com/2015/04/13/600k-concurrent-websocket-connections-on-aws-using-node-js/\">article</a> to see most of what we did).
    <br/><br/>
    The app itself is written in React Native and will soon be released to both the iOS and Android stores (we’re in the review process with both currently).
    We've taken on the approach of using <a class="link" href=\"https://reactjs.org/docs/hooks-intro.html\">Hooks</a> and all functional components.
    This was an uneasy transition for those of us that had used React before, but we all soon came to love the elegance of this method.
    Another interesting approach we took was to create our own <a class="link" href="https://tailwindcss.com/">Tailwind.css</a> package for React Native.
    This is still hotly debated on the team, but I personally love the atomic approach to CSS.
  `,
  TILE_QUEST: `
    Up until this point I had made a few games by coding a simple engine myself in Java or JavaScript.
    That was a fun exercise that I definitely don’t regret, but it was clear that to go past simple 2D arcade games
    I would need to learn a proper game engine.
    <br/><br/>
    So at the end of 2019 I committed myself to the task of
    learning Unity (great course <a class="link" href=\"https://www.udemy.com/share/101WjsBUEfcFhVTHQ=/\">here</a> if you're interested).
    After learning the basics, I excitedly told my brother about my new skill and we set out to design a game.
    As a kid we played a board game called <a class="link" href="https://www.allthingsheroscape.com/">HeroScape</a> that we thought would make for a great virtual spin-off.
    The idea is you select a crew of 3-5 units and then take turns moving or attacking with each unit while your opponent does the same.
    The game is currently a work in progress with no forseeable release date, but man have I had fun working on it!
  `,
  ROULETTE: `
    My dad recently came at me with a fool proof way to get rich at roulette. I was initially skeptical, as hopefully most of you would be.
    But after him insistently explaing his strategy to me several times, I realized it actually made sense (sort of).
    <br/><br/>
    So here's the idea: You bet $1 on black. If that bet misses, you double it. If it hits, you bet $1 again.
    So everytime black hits, you make back all the money you just lost plus $1. Don't believe me? Say you bet $1 on the first round and lost,
    then $2 on the second round and lost, then $4 on the third round, etc..., until you finally hit on the 5th round. That would make your
    net profit -$1 - $2 - $4 - $8 + $16 = $1. But don't go running off to the casino just yet.
    <br/><br/>
    There's a couple problems with this strategy.
    For one, it would take an insane amount of time to make any significant amount of money since you only net $1 every few rolls. You might be
    thinking well I'll just bet $10 or $100 to start instead of $1. The problem with that is that you risk a lot of money with this method.
    Say you start at $100 and black doesnt hit for 6 rounds in a row (about a 1.1% chance). At that point, you'll be in debt to the casino
    a whooping $12,700 and say you don't have enough to make the next bet of $12,800. Then, you're forced to walk away down $12,700.
    <br/><br/>
    So inorder to satisfy my curiosity and prevent my dad from gamballing away my inheritance, I created a calculator that makes it easy to see
    what you can expect to get out of a roulette strategy like the one I descibed above. You simply specify your strategy using some really simple
    code like so: {"BLACK": [1, "$BLACK = 1"], "NOT_BLACK": [0, "$BLACK *= 2"]}, then tell it how much money you'd like to start with and
    how much money you'd like to walk away with. Then it will run a bunch of simulations for you and tell you the aggregate result.
  `,
  MIMOS: `
    The idea behind Mimos was to be a payment platform that people could use at restaruants instead of asking for the bill. I still love the idea
    in theory, but we really underestimeted the difficulty of getting restaruants on board. In the end we abonded the idea, but it was a great learning experience 
    and one of my first attempts at a startup.
    <br/><br/>
    This was the first mobile app I made targeting both iOS and Andriod. I had heard of popular options like React Native and Ionic, but
    decided to go with the more experimental <a class="link" href=\"https://flutter.dev/\">Flutter</a> because I had a the experience with Dart from
    working at Google and I also liked that it came with its own design system.
    <br/><br/>
    We also had a admin application written in Angular that would allow servers to create/manage orders and generate QR codes that
    they could give to their table to scan with the app. We had an end-to-end working prototype that allowed a user to pay for an order with
    fake money, but just couldn't get anyone to bite on the idea.
  `,
  FOXXIE: `
    Foxxie is a startup idea a friend of mine came up with that I have been helping him on the tech side with. Without going into too much detail,
    it is a project management software that we hope to use to build software more effiecently.
    <br/><br/>
    The site is built with Angular and Tailwind.css. On the backend we have Node, Express, and MongoDB. Did not have to tackle any interesting
    challenges here, but it was good practice building a production ready site with consideration for design and code-quality all in just a few weeks.
    <br/><br/>
    I also made the logo you see to the right/below.
  `,
  FAT_BAT: `
    Fat Bat was one of the first games I ever made and the first app I had published.
    My goal was to put my prgramming skills to the test and build something I could show off to my friends and family.
    I knew an arcade game would be something I would be proud to share and wouldn't lead me down too much of a rabbit hole with features.
    <br/><br/>
    So I set off creating a really simple physics engine that would calculate a balls current position while it bounced between a floor and ceiling.
    From there I added the mechanic where you could slow or speed up how fast the ball fell. This gave the player full control over the ball, but in a weird, less-intuitive sort of way.
    Next I had to create obstacles for the player to avoid and this is where I think I landed on a bat flying throuhg a cave avoiding stalagmite.
    After polishing things up and creating a set of 10 levels, I forked over the 100 bucks Apple requires and submitted my first app to the store!
    I was so proud to show my friends and family and some of them even got slightly hooked on the game and spent way too much time trying to beat each level.
  `
};

const Projects = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main id="content">
        <Splash
          titleLines={["What I've Been", "Working On"]}
          imgUrl="/imgs/projects-bg.jpg"
          imgAlt="person coding"
        />
        <div>
          <Project
            name="Next2Me"
            techs={[
              "AWS",
              "MongoDB",
              "WebSocket",
              "Express",
              "Node",
              "GraphQL",
              "React Native"
            ]}
            description={DESCRIPTIONS.CHAT_APP}
            link="http://www.next2me.org"
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
            description={DESCRIPTIONS.TILE_QUEST}
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
            description={DESCRIPTIONS.ROULETTE}
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
            description={DESCRIPTIONS.MIMOS}
            githubLink="https://github.com/willyp63?tab=repositories&q=restaurant-payments&type=&language="
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
            description={DESCRIPTIONS.FOXXIE}
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
            name="Fat Bat"
            isDark
            techs={["Objective-C", "Quartz 2D"]}
            description={DESCRIPTIONS.FAT_BAT}
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
      </main>
    </React.Fragment>
  );
};

export default Projects;
