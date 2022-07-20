import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Markets from "./pages/Markets";
import NavBar from "./components/NavBar";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "#131722",
          color: "white",
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Markets" element={<Markets />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
