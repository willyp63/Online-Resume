import React, { useEffect, useRef } from "react";
import { FaEnvelope, FaBars } from "react-icons/fa";
import { HashLink, NavHashLink } from "react-router-hash-link";

const NavBar = () => {
  const bgEl = useRef(null);

  useEffect(() => {
    const navBarHeight = bgEl.current.clientHeight;

    const onScroll = () => {
      const scrollOffset = Math.max(window.innerHeight - window.scrollY, 0);
      if (scrollOffset < navBarHeight) {
        bgEl.current.classList.remove("hidden");
        bgEl.current.style.top = `${scrollOffset}px`;
      } else {
        bgEl.current.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed z-50 top-0 left-0 py-2 w-full flex justify-between items-center outer-grid">
      <div
        ref={bgEl}
        className="absolute left-0 w-full bg-contain h-full opacity-75 bg-white"
        style={{ top: "100vh" }}
      ></div>
      <div
        className="flex items-center relative"
        style={{ mixBlendMode: "difference" }}
      >
        <HashLink smooth to="/projects#splash" className="nav-bar-logo-link">
          <svg
            className="absolute top-0 left-0"
            version="1.1"
            baseProfile="full"
            width="100"
            height="100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="42" y1="58" x2="58" y2="42" style={{ strokeWidth: 2 }} />
            <text
              x="43"
              y="47"
              style={{
                fontSize: 16,
                fontFamily: "sans-serif",
                textAnchor: "middle"
              }}
            >
              W
            </text>
            <text
              x="59"
              y="62"
              style={{
                fontSize: 16,
                fontFamily: "sans-serif",
                textAnchor: "middle"
              }}
            >
              P
            </text>
          </svg>
          <svg
            version="1.1"
            baseProfile="full"
            width="100"
            height="100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0"
              y="0"
              width="50"
              height="50"
              transform="translate(50 50) rotate(45) translate(-25 -25)"
              style={{ strokeWidth: 2, fillOpacity: 0 }}
            />
          </svg>
        </HashLink>
        <div className="hidden lg:block">
          <NavHashLink smooth to="/projects#splash" activeClassName="nav-bar-link--active" className="nav-bar-link">
            PROJECTS
          </NavHashLink>
          <NavHashLink smooth to="/about#splash" activeClassName="nav-bar-link--active" className="nav-bar-link">
            ABOUT
          </NavHashLink>
          <NavHashLink smooth to="/skills#splash" activeClassName="nav-bar-link--active" className="nav-bar-link">
            SKILLS
          </NavHashLink>
          <NavHashLink smooth to="/resume#splash" activeClassName="nav-bar-link--active" className="nav-bar-link">
            RESUME
          </NavHashLink>
          <NavHashLink smooth to="/blog#splash" activeClassName="nav-bar-link--active" className="nav-bar-link">
            BLOG
          </NavHashLink>
        </div>
      </div>
      <div style={{ mixBlendMode: "difference" }}>
        <div className="hidden lg:block">
          <NavHashLink smooth to="/contact#splash" activeClassName="nav-bar-link--active" className="nav-bar-link">
            <FaEnvelope className="w-4 h-4 mr-2" />
            CONTACT
          </NavHashLink>
        </div>
        <div className="lg:hidden">
          <button className="nav-bar-link">
            <FaBars className="w-8 h-8" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
