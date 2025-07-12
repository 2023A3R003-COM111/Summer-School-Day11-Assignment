import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ExplanationPage } from "./pages/ExplanationPage";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/explanation" element={<ExplanationPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
