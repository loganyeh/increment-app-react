import { useState, useRef, useEffect, useContext } from "react";
import { MyContext } from "./components/MyContext";
import CounterApp from "./components/CounterApp";

function App() {
  // const {} = useContext(MyContext);

  return (
    <>
        <CounterApp />
    </>
  )
}

export default App
