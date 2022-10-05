import * as React from "react";
import { container, mainContainer } from "./styles/layout.module.css";

const Layout = ({ navbar, children, footer }) => {
  return (
    <div className={container}>
      <header>{navbar}</header>
      <main className={mainContainer}>{children}</main>
      {/* <footer>{footer}</footer> */}
    </div>
  );
};

export default Layout;
