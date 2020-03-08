import React from "react";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed z-50 top-0 left-0 px-32 pt-2 w-full flex justify-between items-center">
      <div className="flex items-center relative">
        <Link to="/">
          <svg
            className="absolute top-0 left-0"
            version="1.1"
            baseProfile="full"
            width="100"
            height="100"
            stroke="#fff"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="40" y1="60" x2="60" y2="40" style={{ strokeWidth: 2 }} />
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
            className="transform transition-transform duration-200 hover:rotate-45"
            version="1.1"
            baseProfile="full"
            width="100"
            height="100"
            stroke="#fff"
            fill="#fff"
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
        </Link>
        <Link
          to="/"
          className="text-white hover:text-yellow-600 text-md p-2 mx-4"
        >
          PROJECTS
        </Link>
        <Link
          to="/"
          className="text-white hover:text-yellow-600 text-md p-2 mx-4"
        >
          ABOUT
        </Link>
        <Link
          to="/"
          className="text-white hover:text-yellow-600 text-md p-2 mx-4"
        >
          SKILLS
        </Link>
        <Link
          to="/"
          className="text-white hover:text-yellow-600 text-md p-2 mx-4"
        >
          RESUME
        </Link>
        <Link
          to="/"
          className="text-white hover:text-yellow-600 text-md p-2 mx-4"
        >
          BLOG
        </Link>
      </div>
      <div>
        <Link
          to="/"
          className="text-white flex items-center hover:text-yellow-600 text-md p-2"
        >
          <FiMail className="w-4 h-4 mr-2" />
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
