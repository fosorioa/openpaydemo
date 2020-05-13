import React from "react";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { MainRouter } from "./router";

export default function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}
