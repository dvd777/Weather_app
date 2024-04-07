// WeatherNewsPage.js

import React, { useState, useEffect } from "react";
import WeatherPost from "./WeatherPost";
import "./WeatherNewsPage.css";

const WeatherNewsPage = () => {
  const [locations, setLocations] = useState([]);
  const apiKey = "1eb1adba70dc1e7df193ee3b2589d331";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Fetch weather data for major cities using OpenWeatherMap API
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743,2988507,1850147,2147714&appid=${apiKey}&units=metric`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        // Extract city names from the response
        const cityNames = data.list.map((city) => city.name);
        setLocations(cityNames);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [apiKey]);

  return (
    <div className="blog-container">
      <h1>Weather News Around the Globe</h1>
      <div className="posts">
        {locations.map((location) => (
          <WeatherPost key={location} location={location} />
        ))}
      </div>
    </div>
  );
};

export default WeatherNewsPage;
