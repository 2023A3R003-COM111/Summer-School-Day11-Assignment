// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ExplanationPage } from "./pages/ExplanationPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="p-4">
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

// components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold">Car Gallery</h1>
      <div className="space-x-4">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        <Link to="/about" className="text-blue-500 hover:underline">About</Link>
        <Link to="/explanation" className="text-blue-500 hover:underline">Explanation</Link>
      </div>
    </nav>
  );
}

// pages/HomePage.jsx
import React, { useEffect, useState } from "react";

export function HomePage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/cars?limit=6", {
      headers: { 'X-Api-Key': 'YOUR_API_KEY_HERE' }
    })
      .then(res => res.json())
      .then(data => {
        setCars(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Explore Cars</h2>
      {loading ? <p>Loading...</p> : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cars.map((car, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-4">
              <h3 className="text-lg font-bold">{car.make} {car.model}</h3>
              <p>Year: {car.year}</p>
              <p>Type: {car.class}</p>
              <p>Fuel: {car.fuel_type}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// pages/AboutPage.jsx
import React from "react";

export function AboutPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">About</h2>
      <p>
        This project showcases a dynamic car gallery using an external API. Built with React and modular components,
        it demonstrates clean architecture and responsive design.
      </p>
    </div>
  );
}

// pages/ExplanationPage.jsx
import React from "react";

export function ExplanationPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
      <p>
        The application fetches car data from an API and displays it in a grid layout. React Router handles navigation,
        and components are modularized for maintainability. Tailwind CSS styles the UI to keep it clean and responsive.
      </p>
    </div>
  );
}
