import React from "react";

const NavList: React.FC = ({ children }) => {
  return (
    <ul className="w-full bg-gray-50/40 dark:bg-dark/70 backdrop-blur-md px-6 py-1.5 rounded-2xl   flex items-center justify-center  text-lg gap-x-3">
      {children}
    </ul>
  );
};

export default NavList;
