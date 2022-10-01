import * as React from "react";

const Section = ({ children }) => {
  return <section>{children}</section>;
};
const Flex = ({
    direction,
    justify,
    align,
    children }) => {
  return <div style={{
    display: 'flex',
    flexDirection: ((!direction) ? 'row' : direction),
    justifyContents: ((!justify) ? 'center' : justify),
    alignItems: ((!align) ? 'center' : align),
  }}>{children}</div>;
};

const Text = ({ title, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

const Image = ({alt, src}) => {
    return (
        <img src={src} alt={alt}></img>
    )
}

export { Section, Flex, Text, Image};
