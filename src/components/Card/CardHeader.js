import React from "react";

const CardHeader = (props) => {
  let srcIcon =
    "https://www.weatherbit.io/static/img/icons/" +
    props.weather.icon.split("d").join("") +
    props.isDay +
    ".png";

  if (props.isDay === "n") {
    cardHeaderStyle = {
      ...cardHeaderStyle,
      backgroundColor: "#070b34",
      color: "#fff",
    };
  } else {
    cardHeaderStyle = {
      ...cardHeaderStyle,
      backgroundColor: "skyblue",
      color: "#000",
    };
  }

  return (
    <div className="card-header" style={cardHeaderStyle}>
      <h4>{props.date}</h4>
      <img src={srcIcon} alt="Weather Icon" />
      <h2>{props.temperature}°C</h2>
      <h5>{props.weather.description}</h5>
    </div>
  );
};

let cardHeaderStyle = {
  backgroundColor: "skyblue",
  color: "#000",
  padding: "2rem",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  pointerEvents: "none",
};

export default CardHeader;
