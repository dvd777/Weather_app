import { useState } from "react";
import { Link } from "react-router-dom";
import "./Homebar.css";
import WeatherApp from "./Weather_app";
import AboutUs from "./AboutUs";
import LoginSignup from "../LoginSignup/LoginSignup";
import WeatherNewsPage from "./WeatherNewsPage"; // Import WeatherNewsPage component
import facebook_img from "../Assets/Facebook_icon.jpeg";
import inst_img from "../Assets/insta.jpeg";
import what_img from "../Assets/whatsapp.jpg";
import weatherHome_img from "../Assets/weather_logo.jpg";

function Homebar() {
  const [selectedComponent, setSelectedComponent] = useState("WeatherApp");

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
            {/* Add link to WeatherNewsPage */}
            <button onClick={() => handleComponentChange("WeatherNewsPage")}>
              Weather News
            </button>
          </Link>
        </div>
      </div>
      <div className="renderArea">
        {/* Render component based on selectedComponent state */}
        {selectedComponent === "WeatherApp" && <WeatherApp />}
        {selectedComponent === "AboutUs" && <AboutUs />}
        {selectedComponent === "LoginSignup" && <LoginSignup />}
        {selectedComponent === "WeatherNewsPage" && <WeatherNewsPage />}{" "}
        {/* Render WeatherNewsPage component */}
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
    </div>
  );
}

export default Homebar;
