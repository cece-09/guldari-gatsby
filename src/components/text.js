import * as React from "react";
import { title, description, container } from "./styles/text.module.css";

export const Text = ({}) => {
  
  return (
    <div className={container}>
      <h1 className={title}></h1>
      <p className={description}></p>
    </div>
  );
};
