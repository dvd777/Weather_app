import { useState } from "react";
import { Link } from "react-router-dom";
import "./Homebar.css";
import WeatherApp from "./Weather_app";
import AboutUs from "./AboutUs";
import LoginSignup from "../LoginSignup/LoginSignup";
import WeatherNewsPage from "./WeatherNewsPage";
import facebook_img from "../Assets/Facebook_icon.jpeg";
import inst_img from "../Assets/insta.jpeg";
import what_img from "../Assets/whatsapp.jpg";
import weatherHome_img from "../Assets/weather_logo.jpg";

function Homebar() {
  // State to manage the selected component
  const [selectedComponent, setSelectedComponent] = useState("WeatherApp");

  // Function to handle component change based on button click
  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <div className="homeContainer">
      <div className="header">
        <div className="imgSkycast">
          <div className="homeimg">
            <Link to="/">
              <img
                src={weatherHome_img}
                onClick={() => handleComponentChange("WeatherApp")}
              />
            </Link>
          </div>
          <div className="skyCast">
            <h1>SkyCast</h1>
          </div>
        </div>
        <div className="navbar">
          <Link to="/aboutus">
            <button onClick={() => handleComponentChange("AboutUs")}>
              About Us
            </button>
          </Link>
          <Link to="/loginsignup">
            <button onClick={() => handleComponentChange("LoginSignup")}>
              Login/Signup
            </button>
          </Link>
          <Link to="/weathernews">
            {" "}
            <button onClick={() => handleComponentChange("WeatherNewsPage")}>
              CityWeather Hub
            </button>
          </Link>
        </div>
      </div>
      <div className="renderArea">
        {selectedComponent === "WeatherApp" && <WeatherApp />}
        {selectedComponent === "AboutUs" && <AboutUs />}
        {selectedComponent === "LoginSignup" && <LoginSignup />}
        {selectedComponent === "WeatherNewsPage" && <WeatherNewsPage />}{" "}
      </div>
      <div className="footer">
        <div className="facebook">
          <a href={""}>
            <img
              src={facebook_img}
              alt="Facebook"
              width="50px"
              height="50px"
              className="image-style"
              id="unique-image"
            />
          </a>
        </div>
        <div className="insta">
          <a href={""}>
            <img
              src={inst_img}
              alt="Instagram"
              width="50px"
              height="50px"
              className="image-style"
              id="unique-image"
            />
          </a>
        </div>
        <div className="whatsapp">
          <img
            src={what_img}
            alt="WhatsApp"
            width="50px"
            height="50px"
            className="image-style"
            id="unique-image"
          />
        </div>
      </div>
      <div className="Copyright">©SKYCAST</div>
    </div>
  );
}

export default Homebar;
