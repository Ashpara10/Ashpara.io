import React, { useState, useContext, useEffect } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { BiMoon, BiSun } from "react-icons/bi";
import NavList from "./NavList";
import NavItem from "./NavItem";
import MenuIcon from "./Icons/MenuIcon";

const Header: React.FC = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [nav, setNav] = useState(false);
  const router = useRouter();
  return (
    <header className="w-full fixed top-0 z-10 mt-0 sm:mt-2 ">
      <div className="w-full hidden sm:flex items-center justify-center">
        <div>
          <NavList>
            <NavItem id="home" onClick={() => router.push("/")}>
              Home
            </NavItem>
            <NavItem id="about" onClick={() => router.push("/about")}>
              About
            </NavItem>
            <NavItem id="blog" onClick={() => router.push("/blog")}>
              Blog
            </NavItem>
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
      <div className="w-full flex flex-col sm:hidden bg-gray-50/60 dark:bg-dark/60 backdrop-blur-md    ">
        <div className="w-full px-4 py-1.5 flex items-center justify-between">
          <button
            onClick={() => setNav(!nav)}
            className=" text-2xl flex items-center justify-center"
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
          <ul className="w-full flex flex-col font-gro font-medium text-lg px-4 items-center justify-center">
            <li
              className="w-full text-left p-2 "
              onClick={() => router.push("/")}
            >
              Home
            </li>
            <hr className="dark:text-white" />

            <li
              className="w-full text-left p-2"
              onClick={() => router.push("/about")}
            >
              About
            </li>

            <li
              className="w-full text-left p-2"
              onClick={() => router.push("/blog")}
            >
              Blog
            </li>

            <li
              className="w-full text-left p-2"
              onClick={() =>
                router.push("https://github.com/Ashpara10/Ashpara.io")
              }
            >
              Source
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};
export default Header;
