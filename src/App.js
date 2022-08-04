import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Markets from "./pages/Markets";
import NavBar from "./components/NavBar";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import HeadMap from "./pages/HeadMap";
import CoinPage from "./pages/CoinPage";
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
          <Route path="/Markets/:id" element={<CoinPage />} />
          <Route path="/Headmap" element={<HeadMap />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
