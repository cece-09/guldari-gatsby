import * as React from "react";

const Section = ({ children }) => {
  return <section>{children}</section>;
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
