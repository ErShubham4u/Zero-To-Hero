// const heading = React.createElement("h1", {}, "Zero To Hero");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const heading = React.createElement("h1", { id: "heading" }, "Zero To Hero");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const heading = React.createElement("h1", { id: "heading", xyz : "abc" }, "Zero To Hero");
console.log(heading)    // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

