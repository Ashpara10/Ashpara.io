import React, { MouseEventHandler } from "react";

type NavItem = {
  children: React.ReactNode;
  id?: string;
  onClick?: MouseEventHandler;
};

const NavItem = ({ children, id, onClick }: NavItem) => {
  return (
    <li id={id} onClick={onClick} className={`px-2 font-gro  `}>
      {children}
    </li>
  );
};

export default NavItem;
