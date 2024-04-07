// WeatherPost.js

import React, { useState, useEffect } from "react";

const WeatherPost = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "1eb1adba70dc1e7df193ee3b2589d331";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
        );
        if (!response.ok) {
          throw new Error("Weather data not available");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [apiKey, location]);

  return (
    <div className="post">
      <h2>Weather in {location}</h2>
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Overall conditions: {weatherData.weather[0].main}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherPost;
