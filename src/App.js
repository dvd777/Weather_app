import "./App.css";
import WeatherApp from "./Components/Weather_app/Weather_app";
import AboutUs from "./Components/Weather_app/AboutUs";
import EmergencyAlertsPage from "./Components/Weather_app/EmergencyAlertsPage";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homebar from "./Components/Weather_app/Homebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homebar />}>
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="loginsignup" element={<LoginSignup />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
