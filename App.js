import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
const Title = function () {
  return <h1>Namaste React using JSXs</h1>;
};

//JSX- HTML like Syntax
// JSX Heading ===
const jsxHeading = <h1>This is a JSX Heading</h1>;

//React Functional Components=>  JS Function which returns a JSX
const FunctionComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1>React Functional Component Heading</h1>
    </div>
  );
};

//render js inside JSX---- put it inside {}
const num = 100;
const jsInsidezJSX = (
  <div>
    <span>{num * 3}</span>
  </div>
);


//Similar way you can render React Element inside JSX as React Element is basically JS Objects
const reactEl = React.createElement('h1', {id: "reactEl"}, "React element Heading");
const reactElementInsidezJSX = (
  <div>
    <span>{reactEl}</span>
  </div>
);


const root = createRoot(document.getElementById("root"));
root.render(<FunctionComponent />);
