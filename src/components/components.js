import * as React from "react";
import { section, text, image } from './styles/components.module.css';

const Section = ({ children }) => {
  return <section className={section}>{children}</section>;
};

const Text = ({ title, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

const Image = ({ alt, src }) => {
  return <img src={src} alt={alt} />;
};

export { Section, Text, Image };
