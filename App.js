import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// const heading = React.createElement("h1", {
//     id :'heading'
// }, "Hello from react");
const heading = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement(
      "div",
      {
        id: "child 1",
        key: "c1h1"
      },
      [
        React.createElement(
          "h1",
          {
            id: "heading1",
            key:"c1h2"
          },
          "Heading1"
        ),
        React.createElement(
          "h1",
          {
            id: "heading2",
            key: "c1h3"
          },
          "Heading1"
        ),
      ]
    ),
    React.createElement(
      "div",
      {
        id: "child 2",
        key:"c2h1"
      },
      [
        React.createElement(
          "h1",
          {
            id: "heading3",
            key: "c2h2"
          },
          "Heading1"
        ),
        React.createElement(
          "h1",
          {
            id: "heading4",
            key: "c2h3"
          },
          "Heading1"
        ),
      ]
    ),
  ]
);
const root = createRoot(document.getElementById("root"));
root.render(heading);
