import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./fanta.css";
import App from "./App.jsx";

// go to the document, index.html, get the element with the id of `root` and render the app w/in it.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* the whole application */}
    <App />
  </StrictMode>,
);
