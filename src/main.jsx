import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MusicPlayerProvider } from "./context/MusicPlayerContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MusicPlayerProvider>
    <App />
  </MusicPlayerProvider>
);
