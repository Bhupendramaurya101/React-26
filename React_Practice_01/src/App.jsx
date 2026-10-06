import React from "react";

const element = (
  <a href="https://google.com" target="_blank">Click me to visit google</a>

);

const anotherElement = React.createElement(
  "a",
  {href : "https://google.com", target: "_blank" },
  "Click me to visit Google!"
);
function App() {

  return (
    <>
      <h1>Vite Project 01 26</h1>
      {element}
      <br />
      {anotherElement}
    </>
  )
}

export default App
