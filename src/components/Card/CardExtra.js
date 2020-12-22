import React from "react";

const CardExtra = (props) => {
  let sunriseTime = new Date(props.extra.sunrise_ts * 1000);
  let sunsetTime = new Date(props.extra.sunset_ts * 1000);
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: " 0 1rem",
        textAlign: "left",
      }}
    >
      <h5>Wind direction: {props.extra.wind_dir}°</h5>
      <h5>
        Temperature: {props.extra.min_temp}°C~{props.extra.max_temp}°C
      </h5>
      <h5>Acc. snowfall: {props.extra.snow}mm</h5>
      <h5>Avg pressure: {props.extra.pres}mb</h5>
      <h5>Avg total cloud coverage: {props.extra.clouds}%</h5>
      <h5>Visibility: {props.extra.vis}Km</h5>
      <h5>Avg Ozone: {props.extra.ozone}DU</h5>
      <h5>Sunrise time: {sunriseTime.toString().substr(16, 8)}</h5>
      <h5>Sunset time: {sunsetTime.toString().substr(16, 8)}</h5>
    </div>
  );
};

export default CardExtra;
