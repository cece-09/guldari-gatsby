import * as React from "react"
import { section } from "./styles/components.module.css"

const Section = ({ children }) => {
  return (
    <section className={section}>
      {children}
    </section>
  );
};

export default Section