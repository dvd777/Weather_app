import { useState, useEffect } from "react";
import "./EmergencyAlertsPage.css";

function EmergencyAlertsPage() {
  const [radarUrl, setRadarUrl] = useState("");

  let api_key = "1eb1adba70dc1e7df193ee3b2589d331";
  let cityName = "kochi";
  let layer = "precipitation_new";
  let z = 0;
  let x = 0;
  let y = 0;

  useEffect(() => {
    // Fetch radar data from OpenWeatherMap API
    const fetchRadarData = async () => {
      try {
        const response = await fetch(
          `https://tile.openweathermap.org/map/${layer}/${z}/${x}/${y}.png?appid=${api_key}`
        );
        const data = await response.json();
        // Assuming radar image URL is included in the response
        setRadarUrl(data.radarImageUrl); // Adjust this based on actual API response
      } catch (error) {
        console.error("Error fetching radar data:", error);
      }
    };

    fetchRadarData();
  }, []);

  return (
    <div className="weather-radar-container">
      <h2>Weather Radar</h2>
      {radarUrl ? (
        <img src={radarUrl} alt="Weather Radar" />
      ) : (
        <p>Loading radar data...</p>
      )}
    </div>
  );
}

export default EmergencyAlertsPage;
