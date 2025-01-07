import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App.js";
import "./index.css";

const rootElement = document.getElementById("root");

hydrateRoot(rootElement, <App />);
