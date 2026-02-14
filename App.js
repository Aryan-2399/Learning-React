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
      },
      [
        React.createElement(
          "h1",
          {
            id: "heading",
          },
          "Heading1"
        ),
        React.createElement(
          "h1",
          {
            id: "heading",
          },
          "Heading1"
        ),
      ]
    ),
    React.createElement(
      "div",
      {
        id: "child 2",
      },
      [
        React.createElement(
          "h1",
          {
            id: "heading",
          },
          "Heading1"
        ),
        React.createElement(
          "h1",
          {
            id: "heading",
          },
          "Heading1"
        ),
      ]
    ),
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
