import * as React from "react";
import { section } from "./styles/components.module.css";

const Section = ({ children }) => {
  return (
    <section className={section}>
      {children}
    </section>
  );
};

const Image = ({ alt, src }) => {
  return <img src={src} alt={alt} />;
};

export { Section, Image };
