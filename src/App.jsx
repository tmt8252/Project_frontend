import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./pages/Navigation";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Fiction from "./books_api/Fiction";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Fiction />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );

  // test
};

export default App;
