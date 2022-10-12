import * as React from "react";
import { container } from "./styles/layout.module.css";

const Layout = ({ navbar, children, footer }) => {
  return (
    <div className={container}>
      <header>{navbar}</header>
      <main>{children}</main>
      {/* <footer>{footer}</footer> */}
    </div>
  );
};

export default Layout;
