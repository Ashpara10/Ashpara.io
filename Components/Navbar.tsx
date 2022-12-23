import React, { useState } from "react";
import { useTheme } from "next-themes";
import router from "next/router";
import { BiMoon, BiSun } from "react-icons/bi";
import NavList from "./NavList";
import NavItem from "./NavItem";
import MenuIcon from "./Icons/MenuIcon";

const Navbar: React.FC = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [nav, setNav] = useState(false);

  return (
    <nav className="w-full md:fixed top-0 md:z-10 backdrop-blur-md bg-gray-50/40 dark:bg-dark/70  p-3 ">
      <div className="w-full flex items-center justify-center">
        <div>
          <NavList>
            <NavItem onClick={() => router.push("/")}>Home</NavItem>
            <NavItem onClick={() => router.push("/")}>About</NavItem>
            <NavItem onClick={() => router.push("/blog")}>Blog</NavItem>
            <NavItem onClick={() => router.push("/")}>Source</NavItem>
            <button
              className="nav-theme-btn  "
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <BiMoon /> : <BiSun />}
            </button>
          </NavList>
        </div>
      </div>
      <div className="w-full flex md:hidden items-center justify-between p-3  absolute top-0 right-0 left-0 ">
        <button
          onClick={() => setNav(true)}
          className=" font-extrabold rounded-lg text-xl text-gray-900 dark:text-gray-100 p-3"
        >
          <MenuIcon />
        </button>
        <button
          className="nav-theme-btn  "
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <BiMoon /> : <BiSun />}
        </button>
      </div>
      {nav && (
        <div
          onClick={() => setNav(false)}
          className="w-full z-auto h-full fixed top-0 left-0 bottom-0 right-0 bg-black/50"
        />
      )}

      {/* <div
        className={`px-5 py-2 z-20 font-normal text-base w-64 translate-x-[-100%] overflow-hidden flex flex-col fixed top-0 left-0 bottom-0 bg-white/70 backdrop-blur-md border-r border-gray-300 dark:border-bdark dark:bg-dark/70 ${
          rendered
            ? "translate-x-0 transition-all"
            : " translate-x-[-100%] transition-all"
        } h-screen`}
      >
        <ul className="w-full py-3 flex flex-col items-center justify-center gap-y-2">
          <div className="w-full px-2 flex items-center justify-start">
            <NavIcon />
          </div>
          <li
            onClick={() => router.push("/")}
            className="w-full flex items-center gap-r-2 justify-start hover:transition-all hover:bg-gray-100 text-left py-1.5 px-4 dark:hover:bg-[#212121] rounded-md"
          >
            Home
          </li>
          <li
            onClick={() => router.push("/")}
            className="w-full hover:transition-all hover:bg-gray-100 text-left py-1.5 px-4 dark:hover:bg-[#212121] rounded-md"
          >
            About
          </li>
          <li
            onClick={() => router.push("/blog")}
            className="w-full hover:transition-all hover:bg-gray-100 text-left py-1.5 px-4 dark:hover:bg-[#212121] rounded-md"
          >
            Blog
          </li>
          <li
            onClick={() => router.push("/snippets")}
            className="w-full hover:transition-all hover:bg-gray-100 text-left py-1.5 px-4 dark:hover:bg-[#212121] rounded-md"
          >
            Snippets
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
