import React from "react";

function Forecast({ data }) {
  return (
    <div className="forecast">
      {data.map((day, index) => (
        <div key={index} className="forecast-card glass">
          <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt={day.weather[0].description}
          />
          <p>{day.main.temp}°C</p>
          <p>{day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
