import { Text, Image } from "./components";
import { Link } from "gatsby";
import React from "react";

const TagList = ({ tags }) => {
  return (
    <ul className="tag-list-style">
      {tags.map((tag, i) => (
        <li key={i}>{tag}</li>
      ))}
    </ul>
  );
};

const Card = ({ i, title, description, tags, imagesrc, link }) => {
  return (
    <div key={i} className="card">
      <Link to="/">
        <img src="/"></img>
        <h1>{title}</h1>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export { Card, TagList };
