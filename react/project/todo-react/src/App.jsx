import { useState } from "react";
import "./App.css";

function App() {
  // defining state variables in react,
  // any variable that react needs to watch consiously, that value updates -> dom is goin' to change
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
