import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaYoutube,
  FaInstagram
} from "react-icons/fa";

const Footer = () => {
  const [hoverItem, setHoverItem] = useState(null);

  return (
    <div className="flex flex-col items-center bg-gray-900 py-32 outer-grid text-center">
      <h2 className="font-serif text-5xl text-white">
        Let me build the software you need.
      </h2>
      <p className="text-white opacity-25 mt-8">
        © 2020 Wil Pirino. All rights reserved. Software Engineer and Pants with
        Direction.
      </p>
      <ul className="flex mt-16" onMouseLeave={() => setHoverItem(null)}>
        <li
          className={
            "transform transition-transform duration-200" +
            (hoverItem
              ? hoverItem === "github"
                ? " scale-110"
                : " scale-90"
              : "")
          }
          onMouseEnter={() => setHoverItem("github")}
        >
          <a href="https://github.com/willyp63">
            <div className="flex justify-center items-center rounded-full bg-white w-10 h-10 mx-2">
              <FaGithub className="w-6 h-6" />
            </div>
          </a>
        </li>
        <li
          className={
            "transform transition-transform duration-200" +
            (hoverItem
              ? hoverItem === "linkedin"
                ? " scale-110"
                : " scale-90"
              : "")
          }
          onMouseEnter={() => setHoverItem("linkedin")}
        >
          <a href="https://github.com/willyp63">
            <div className="flex justify-center items-center rounded-full bg-white w-10 h-10 mx-2">
              <FaLinkedinIn className="w-6 h-6" />
            </div>
          </a>
        </li>
        <li
          className={
            "transform transition-transform duration-200" +
            (hoverItem
              ? hoverItem === "youtube"
                ? " scale-110"
                : " scale-90"
              : "")
          }
          onMouseEnter={() => setHoverItem("youtube")}
        >
          <a href="https://github.com/willyp63">
            <div className="flex justify-center items-center rounded-full bg-white w-10 h-10 mx-2">
              <FaYoutube className="w-6 h-6" />
            </div>
          </a>
        </li>
        <li
          className={
            "transform transition-transform duration-200" +
            (hoverItem
              ? hoverItem === "instagram"
                ? " scale-110"
                : " scale-90"
              : "")
          }
          onMouseEnter={() => setHoverItem("instagram")}
        >
          <a href="https://github.com/willyp63">
            <div className="flex justify-center items-center rounded-full bg-white w-10 h-10 mx-2">
              <FaInstagram className="w-6 h-6" />
            </div>
          </a>
        </li>
        <li
          className={
            "transform transition-transform duration-200" +
            (hoverItem
              ? hoverItem === "email"
                ? " scale-110"
                : " scale-90"
              : "")
          }
          onMouseEnter={() => setHoverItem("email")}
        >
          <a href="https://github.com/willyp63">
            <div className="flex justify-center items-center rounded-full bg-white w-10 h-10 mx-2">
              <FaEnvelope className="w-6 h-6" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
