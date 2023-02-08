import React, { useState, useContext } from "react";
import { useTheme } from "next-themes";
import router from "next/router";
import { BiMoon, BiSun } from "react-icons/bi";
import NavList from "./NavList";
import NavItem from "./NavItem";
import MenuIcon from "./Icons/MenuIcon";
import context from "./Context/context";

const Navbar: React.FC = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [nav, setNav] = useState(false);
  const c = useContext(context);
  const [q, setQ] = useState(c.search);

  return (
    <nav className="w-full md:fixed top-0 md:z-10    p-3 ">
      <div className="w-full flex items-center justify-center">
        <div>
          <NavList>
            <NavItem onClick={() => router.push("/")}>Home</NavItem>
            <NavItem onClick={() => router.push("/about")}>About</NavItem>
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
          onClick={() => setNav(!nav)}
          className=" font-extrabold rounded-lg text-lg text-gray-900 dark:text-gray-100 p-2.5"
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
        <div className="">
          <ul className="w-full  my-3 mx-2 flex flex-col items-center justify-center gap-y-2">
            <li
              onClick={() => router.push("/")}
              className="w-full flex items-center gap-r-2 justify-start hover:transition-all hover:bg-gray-100 text-left py-1.5 px-4 dark:hover:bg-[#212121] rounded-md"
            >
              Home
            </li>
            <li
              onClick={() => router.push("/about")}
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
            <li className="w-full hover:transition-all text-left py-1.5 px-3  rounded-md">
              <input
                value={q}
                onChange={(e) => setQ((c.search = e.target.value))}
                className="bg-transparent border border-gray-300 dark:border-bdark w-full p-2 rounded-md focus-within:outline-0"
                placeholder="Search Blogs...."
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
