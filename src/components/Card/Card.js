import React from "react";
import CardHeader from "./CardHeader";
import CardExtra from "./CardExtra";

const Card = (props) => {
  const {
    valid_date,
    weather,
    temp,
    rh,
    pop,
    wind_spd,
    wind_dir,
    max_temp,
    min_temp,
    snow,
    pres,
    clouds,
    vis,
    ozone,
    sunrise_ts,
    sunset_ts,
  } = props.data;
  let dayNight = "d";
  let date = valid_date.split("-").reverse().join("/");
  let todayTime = new Date();

  if (todayTime > sunset_ts * 1000) {
    dayNight = "n";
  }

  return (
    <div className="weather-card" style={cardStyle} onClick={selectCard}>
      <CardHeader
        isDay={dayNight}
        date={date}
        weather={weather}
        temperature={temp}
      />

      <div style={cardBodyStyle}>
        <h4>Humidity: {rh}%</h4>
        <h4>Precipitation: {pop}%</h4>
        <h4>Wind: {String(wind_spd).substr(0, 4)}m/s</h4>
      </div>

      <CardExtra
        extra={{
          wind_dir,
          max_temp,
          min_temp,
          snow,
          pres,
          clouds,
          vis,
          ozone,
          sunrise_ts,
          sunset_ts,
        }}
      />
    </div>
  );
};

const selectCard = (e) => {
  let activeCard = document.querySelector(".weather-card.active");

  if (activeCard === e.target) {
    activeCard.classList.remove("active");
    e.target.children[0].classList.remove("active");
  } else if (activeCard) {
    activeCard.classList.remove("active");
    activeCard.children[0].classList.remove("active");
    e.target.classList.add("active");
    if (e.target.children[0]) {
      e.target.children[0].classList.add("active");
    }
  } else {
    e.target.classList.add("active");
    e.target.children[0].classList.add("active");
  }
};

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  borderRadius: "10px",
  margin: "1rem",
  cursor: "pointer",
  boxShadow: "3px 4px 10px",
  height: "341px",
  overflow: "hidden",
};

const cardBodyStyle = {
  padding: "1rem",
  pointerEvents: "none",
  backgroundColor: "#fff",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
};

export default Card;
