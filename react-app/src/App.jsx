import { useState, createElement, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassDemo from "./components/ClassComponents/ClassDemo";

function App() {
  const [count, setCount] = useState(0); // hook
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log("hello");
  }, []);

  return (
    // onclick, onClick -> camal case

    <>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle Class Demo
      </button>
      {/* conditional rendering */}
      {show && <ClassDemo name="alice" />}
    </>

    // JSX (Javascript XML) HTML-like syntax sugar
    // createElement() -> react elements -> react DOM/virtual DOM
    // createElement(), transpiler: Babel
    // createElement("h1", { className: "greeting" }, "Hello")
    // <h1 className="greeting">Hello</h1>
  );
}

export default App;
