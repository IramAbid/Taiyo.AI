import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(

    <React.StrictMode>
      <ThemeProvider>

        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found.");
}
