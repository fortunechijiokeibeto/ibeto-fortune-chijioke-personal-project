import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

function AppContent() {
  const location = useLocation();
  const state = location.state;
  const currentPath = location.pathname.toLowerCase();
  const isAuthRoute =
    currentPath === "/login" ||
    currentPath === "/signup" ||
    currentPath === "/sign-up";

  return (
    <div className="App">
      <Routes location={isAuthRoute && state?.backgroundLocation ? state.backgroundLocation : location}>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}