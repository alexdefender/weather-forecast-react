import React from "react";
import { connect } from "react-redux";

const WeatherForecastItem = props => {
  const { weather, dt_txt, main, wind } = props.state;
  return (
    <div className="forecast-weather-info">
      <div>
        <h2>{weather[0].main}</h2>
        <p>{dt_txt.substr(0, 10)}</p>
      </div>
      <img
        src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
        alt=""
        className="forecast-weather__img"
      />
      <ul>
        <li>{Math.round(main.temp)}&deg;</li>
        <li>{wind.speed} m/s</li>
      </ul>
      <p className="forecast-weather__description">
        {weather[0].description.toUpperCase()}
      </p>
    </div>
  );
};

export default connect(state => ({
  appState: state
}))(WeatherForecastItem);
