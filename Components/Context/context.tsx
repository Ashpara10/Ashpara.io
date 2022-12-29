import { createContext } from "react";
import contextProvider from "./contextProvider";

const context = createContext({ search: "hello" });
export default context;
