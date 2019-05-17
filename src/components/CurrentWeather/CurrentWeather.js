import React from "react";
import "./style.scss";
import { connect } from "react-redux";

const CurrentWeather = props => {
  const arrCurrentWeather = props.appState.current;

  if (arrCurrentWeather[arrCurrentWeather.length - 1] !== undefined) {
    const { name, sys, main, weather, wind, clouds } = arrCurrentWeather[
      arrCurrentWeather.length - 1
    ];
    return (
      <div className="current-weather-info">
        <div className="current-weather__main">
          <div className="current-weather__city">
            {name}, {sys.country}
          </div>
          <div className="current-weather__temp">
            {Math.round(main.temp)}&deg;
            <img
              src={`https://openweathermap.org/img/w/${weather[0].icon}.png`}
            />
          </div>
          <div className="current-weather__description">
            {weather[0].description.toUpperCase()}
          </div>
        </div>
        <div className="current-weather__more">
          <ul>
            <li>Humidity: {main.humidity} %</li>
            <li>Pressure: {main.pressure} mb</li>
            <li>Wind speed: {wind.speed} m/s</li>
            <li>Clouds: {clouds.all}</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default connect(state => ({
  appState: state
}))(CurrentWeather);
