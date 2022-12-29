import React from "react";
import context from "./context";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <context.Provider value={{ search: "" }}>{children}</context.Provider>;
};

export default ContextProvider;
