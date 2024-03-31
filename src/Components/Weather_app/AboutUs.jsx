import "./AboutUs.css"; // Import CSS file for styling

function AboutUs() {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>Welcome to our weather app!</p>
      <p>
        WeatherNow is a simple and intuitive weather application that provides
        real-time weather updates for locations around the world. With a sleek
        and user-friendly interface, WeatherNow allows users to quickly check
        the current weather conditions, including temperature, humidity, wind
        speed, and more, for any desired location.
      </p>
      <p>
        For any inquiries or feedback, feel free to contact us via email at{" "}
        <a href="mailto:weatherapp@gmail.com">weatherapp@gmail.com</a> or call
        us at <a href="tel:02467-654783">02467-654783</a>.
      </p>
      <div className="query-box">
        <input type="text" placeholder="please enter the query" />
        <button>Submit</button>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.098746059512!2d-0.24722452383914612!3d51.45634341443251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760ee6c0c242eb%3A0x3a5665ce81752bbf!2sUniversity%20of%20Roehampton%20London!5e0!3m2!1sen!2suk!4v1711184627861!5m2!1sen!2suk"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default AboutUs;
