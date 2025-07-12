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
      <h2 className="page-title">Explore Cars</h2>
      {loading ? <p>Loading...</p> : (
        <div className="car-grid">
          {cars.map((car, index) => (
            <div key={index} className="car-card">
              <h3>{car.make} {car.model}</h3>
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
