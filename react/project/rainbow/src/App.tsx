import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive"); // define the default state of application
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        // className="fixed flex flex-wra justify-center h-40 w-40 top-2 left-1/3"
        style={{ backgroundColor: color }} // way to write custom inline css
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              RED
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              YELLOW
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              GREEN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
