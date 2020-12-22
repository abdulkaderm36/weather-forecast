import React from "react";

const ScreenLoader = () => {
  return (
    <div style={screenLoaderStyle} className="screen-loader">
      <h1>LOADING...</h1>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".screen-loader").style.display = "none";
});

const screenLoaderStyle = {
  background: "#eee",
  position: "absolute",
  top: "0",
  left: "0",
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default ScreenLoader;
