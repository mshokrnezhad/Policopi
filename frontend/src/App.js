import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./views/main/Home.main";
import Register from "./views/main/Register.main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
