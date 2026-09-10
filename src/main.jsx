// src/main.jsx
import { HelmetProvider } from "react-helmet-async";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import "aos/dist/aos.css";

import AOS from "aos";

AOS.init({
  duration: 800,
  once: true,
  easing: "ease-in-out",
});

ReactDOM.createRoot(document.getElementById("root")).render(
<StrictMode>
  <HelmetProvider>
    <App />
  </HelmetProvider>
</StrictMode>
);