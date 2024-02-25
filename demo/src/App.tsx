import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import _01 from "./pages/01";
import _404 from "./pages/404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="01" element={<_01 />} />
        </Route>
        <Route path="*" element={<_404 />} />
      </Routes>
    </div>
  );
}

export default App;
