/**
 * @copyright 2024 Ntshuxeko
 * @license Apache-2.0
 */

/*
 * Import node modules
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*
 * Import app component and css
 */
import "./index.css";
import App from "./App.jsx";
import "lenis/dist/lenis.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
