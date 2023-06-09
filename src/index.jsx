// Dependencias.
import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./components";
import "./global.css";

// Render.
const element = document.getElementById("root");
const root = createRoot(element);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
