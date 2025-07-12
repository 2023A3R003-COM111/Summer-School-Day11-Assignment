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
