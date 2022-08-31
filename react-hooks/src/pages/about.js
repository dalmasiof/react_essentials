import React from "react";
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const About = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h2>About</h2>
      <div>Context Value: {contextValue}</div>
    </div>
  );
};

export default About;
