import React, { useState, useEffect } from "react";

const WeatherPost = ({ location }) => {
  // State to store weather data
  const [weatherData, setWeatherData] = useState(null);
  // API key for accessing OpenWeatherMap API
  const apiKey = "1eb1adba70dc1e7df193ee3b2589d331";

  useEffect(() => {
    // Function to fetch weather data
    const fetchWeatherData = async () => {
      try {
        // Fetch weather data from OpenWeatherMap API
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
        );
        // Check if response is successful
        if (!response.ok) {
          throw new Error("Weather data not available");
        }
        // Parse response to JSON
        const data = await response.json();
        // Set weather data to state
        setWeatherData(data);
      } catch (error) {
        // Log error if data fetching fails
        console.error("Error fetching weather data:", error);
      }
    };
    // Call fetchWeatherData function when location or apiKey changes

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
