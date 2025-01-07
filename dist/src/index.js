import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { jsx as _jsx } from "react/jsx-runtime";
var rootElement = document.getElementById("root");
hydrateRoot(rootElement, /*#__PURE__*/_jsx(App, {}));