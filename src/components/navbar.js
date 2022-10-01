import * as React from "react";
import { Link } from "gatsby";
import * as Style from "./styles/navbar.module.css";

const Navbar = ({ logo, itemList }) => {
  return (
    <nav className={Style.navbar}>
      <div className={Style.logo}>{logo}</div>
      <ul className={Style.menu}>
        {itemList.map(({ item, src }, i) => (
          <li key={i}><Link to={src}>{item}</Link></li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
