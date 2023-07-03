import React, { useState, useContext, useEffect } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { BiMoon, BiSun } from "react-icons/bi";
import NavList from "./NavList";
import NavItem from "./NavItem";
import MenuIcon from "./Icons/MenuIcon";

const Header: React.FC = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  // useEffect(() => {
  //   const path = window.location.href.slice(
  //     window.location.href.lastIndexOf("/")
  //   );
  // });
  return (
    <header
      id="navbar"
      className="w-full transition-all ease-in -translate-y-10  duration-200 ease-in fixed top-0 z-10  p-3"
    >
      <div className="w-full flex items-center justify-center">
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
    </header>
  );
};
export default Header;
