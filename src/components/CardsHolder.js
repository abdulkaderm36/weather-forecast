import React from "react";
import Card from "./Card/Card";
import { fetchWeather } from "./FetchApi";
import InputLoc from "./InputLoc";

export default class CardsHolder extends React.Component {
  state = {
    weather: null,
    city: "",
  };

  componentDidMount() {
    this.info("dubai");
  }

  info = async (cityName) => {
    try {
      const results = await fetchWeather(cityName);
      this.setState({ weather: results, city: results.city_name });
    } catch (err) {
      this.setState({ weather: "n/a" });
    }
  };

  updateCity = (e) => {
    this.setState({ city: e.target.value });
  };

  submitCity = (e) => {
    e.preventDefault();
    this.info(this.state.city);
  };

  render() {
    if (!this.state.weather) {
      return <div></div>;
    }
    if (this.state.weather === "n/a") {
      return (
        <div>
          <InputLoc
            city={this.state.city}
            updateCity={this.updateCity}
            submitCity={this.submitCity}
          />
          <h1 style={{ fontSize: "3rem" }}>Enter A Vaild City/Country</h1>
        </div>
      );
    }

    return (
      <div style={cardHolderStyle}>
        <InputLoc
          city={this.state.city}
          updateCity={this.updateCity}
          submitCity={this.submitCity}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {this.state.weather.data.map((data) => {
            return <Card key={data.datetime} data={data} />;
          })}
        </div>
      </div>
    );
  }
}

const cardHolderStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "85%",
  margin: " 1rem auto",
};
