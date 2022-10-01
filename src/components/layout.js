import * as React from "react";
import { container } from "./styles/layout.module.css";

const Layout = ({ navbar, children }) => {
  return (
    <div className={container}>
      <header>{navbar}</header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
