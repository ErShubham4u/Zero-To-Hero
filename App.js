// const heading = React.createElement("h1", {}, "Zero To Hero");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const heading = React.createElement("h1", { id: "heading" }, "Zero To Hero");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Zero To Hero",
// );
// console.log(heading); // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/*
<div id="parent">
  <div id="child">
    <h1>I'm h1 tag</h1>
  </div>
</div>;

ReactElement(Object) => HTML(Browser Understands)
*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I'm h1 tag"),
//   ),
// );

// console.log(parent); // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

/*
<div id="parent">
  <div id="child">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
</div>;
*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm h1 tag"),
//     React.createElement("h2", {}, "I'm h2 tag"),
//   ]),
// );

// console.log(parent); // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

// JSX

console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


