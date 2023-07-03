import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = (props) => {
  useEffect(() => {
    const navbar = document?.getElementById("navbar");
    navbar?.classList.add("translate-y-0");
  }, []);
  return (
    <div className="mt-14">
      <Header />
      <main className={`px-6 md:px-4 mt-16  `}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
