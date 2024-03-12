import "./WeatherApp.css";

import search_img from "../Assets/search.png";
import cloud_img from "../Assets/cloud.png";
import clear_img from "../Assets/clear.png";
import drizzle_img from "../Assets/drizzle.png";
import humidity_img from "../Assets/humidity.png";
import rain_img from "../Assets/rain.png";
import snow_img from "../Assets/snow.png";
import wind_img from "../Assets/wind.png";
import { useState } from "react";

function WeatherApp() {
  let api_key = "1eb1adba70dc1e7df193ee3b2589d331";

  const [liveimg, setLiveimg] = useState(cloud_img);

  async function Search() {
    const element = document.getElementsByClassName("locationInput");

    if (element[0].value === "") {
      return 0;
    }
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

      let response = await fetch(url);

      let data = await response.json();

      const humidity = document.getElementsByClassName("humidity");
      const wind = document.getElementsByClassName("windSpeed");
      const temp = document.getElementsByClassName("weather_temp");
      const location = document.getElementsByClassName("weather_location");

      humidity[0].innerHTML = data.main.humidity + "%";
      wind[0].innerHTML = data.wind.speed + "Km/h";
      temp[0].innerHTML = data.main.temp + "°c";
      location[0].innerHTML = data.name;

      if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
        setLiveimg(clear_img);
      } else if (
        data.weather[0].icon === "02d" ||
        data.weather[0].icon === "02n"
      ) {
        setLiveimg(cloud_img);
      } else if (
        data.weather[0].icon === "03d" ||
        data.weather[0].icon === "03n"
      ) {
        setLiveimg(drizzle_img);
      } else if (
        data.weather[0].icon === "04d" ||
        data.weather[0].icon === "04n"
      ) {
        setLiveimg(drizzle_img);
      } else if (
        data.weather[0].icon === "09d" ||
        data.weather[0].icon === "09n"
      ) {
        setLiveimg(rain_img);
      } else if (
        data.weather[0].icon === "10d" ||
        data.weather[0].icon === "10n"
      ) {
        setLiveimg(rain_img);
      } else if (
        data.weather[0].icon === "13d" ||
        data.weather[0].icon === "13n"
      ) {
        setLiveimg(snow_img);
      } else {
        setLiveimg(clear_img);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("sorry something went wrong. make sure the spelling is correct");
    }
  }

  return (
    <div className="mainContainer">
      <div className="top_menu">
        <input type="text" className="locationInput" placeholder="search" />
        <div
          className="search_img"
          onClick={() => {
            Search();
          }}
        >
          <img src={search_img} />
        </div>
      </div>

      <div className="weather_img">
        <img src={liveimg} />
      </div>
      <div className="weather_temp">25°c</div>
      <div className="weather_location">london</div>
      <div className="data_store">
        <div className="element">
          <img src={humidity_img} className="icon" />
          <div className="data">
            <div className="humidity">55%</div>
            <div className="hum">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_img} className="icon" />
          <div className="data">
            <div className="windSpeed">20 kph</div>
            <div className="hum">wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
