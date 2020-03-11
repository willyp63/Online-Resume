import React, { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaBars, FaSlash } from "react-icons/fa";
import { HashLink, NavHashLink } from "react-router-hash-link";

const NavBar = ({ isDark = false }) => {
  const bgEl = useRef(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    if (!bgEl.current) {
      return;
    }

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
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.remove("no-scroll", "mobile-nav-active");
  }, []);

  const toggleMobileNav = () => {
    if (isMobileNavOpen) {
      document.body.classList.remove("no-scroll", "mobile-nav-active");
    } else {
      document.body.classList.add("no-scroll", "mobile-nav-active");
    }
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <React.Fragment>
      <nav className="fixed z-50 py-2 w-full flex justify-between items-center outer-grid nav">
        {!isDark ? (
          <div
            ref={bgEl}
            className="absolute left-0 w-full bg-contain h-full opacity-75 bg-white"
            style={{ top: "100vh" }}
          ></div>
        ) : null}
        <div
          className="flex items-center relative"
          style={{ mixBlendMode: "difference" }}
        >
          <HashLink to="/projects#splash" className="nav-bar-logo-link">
            <svg
              className="absolute top-0 left-0"
              version="1.1"
              baseProfile="full"
              width="100"
              height="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="42"
                y1="58"
                x2="58"
                y2="42"
                style={{ strokeWidth: 2 }}
              />
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
            <NavHashLink
              to="/projects#splash"
              activeClassName="nav-bar-link--active"
              className="nav-bar-link"
            >
              PROJECTS
            </NavHashLink>
            <NavHashLink
              to="/about#splash"
              activeClassName="nav-bar-link--active"
              className="nav-bar-link"
            >
              ABOUT
            </NavHashLink>
            <NavHashLink
              to="/resume#splash"
              activeClassName="nav-bar-link--active"
              className="nav-bar-link"
            >
              RESUME
            </NavHashLink>
          </div>
        </div>
        <div style={{ mixBlendMode: "difference" }}>
          <div className="hidden lg:block">
            <NavHashLink
              to="/contact#splash"
              activeClassName="nav-bar-link--active"
              className="nav-bar-link"
            >
              <FaEnvelope className="w-4 h-4 mr-2" />
              CONTACT
            </NavHashLink>
          </div>
          <div className="lg:hidden">
            <button className="nav-bar-link" onClick={toggleMobileNav}>
              <FaSlash
                className="w-8 h-8 transition-transform duration-400"
                style={
                  isMobileNavOpen
                    ? { transform: "rotate(8deg)" }
                    : { transform: "translate(0, -12px) rotate(-38deg)" }
                }
              />
              <FaSlash
                className="absolute w-8 h-8 transition-transform duration-200"
                style={
                  isMobileNavOpen
                    ? { transform: "rotate(8deg)" }
                    : { transform: "rotate(-38deg)" }
                }
              />
              <FaSlash
                className="absolute w-8 h-8 transition-transform duration-200"
                style={
                  isMobileNavOpen
                    ? { transform: "rotate(98deg)" }
                    : { transform: "translate(0, 12px) rotate(-38deg)" }
                }
              />
            </button>
          </div>
        </div>
      </nav>
      <nav className="fixed z-50 top-0 right-0 h-screen mobile-nav bg-gray-800">
        <div className="flex flex-col py-8 px-4">
          <NavHashLink
            to="/projects#splash"
            activeClassName="nav-bar-link--active"
            className="nav-bar-link mb-2"
          >
            PROJECTS
          </NavHashLink>
          <NavHashLink
            to="/about#splash"
            activeClassName="nav-bar-link--active"
            className="nav-bar-link mb-2"
          >
            ABOUT
          </NavHashLink>
          <NavHashLink
            to="/resume#splash"
            activeClassName="nav-bar-link--active"
            className="nav-bar-link mb-2"
          >
            RESUME
          </NavHashLink>
          <NavHashLink
            to="/contact#splash"
            activeClassName="nav-bar-link--active"
            className="nav-bar-link mb-2"
          >
            CONTACT
          </NavHashLink>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
