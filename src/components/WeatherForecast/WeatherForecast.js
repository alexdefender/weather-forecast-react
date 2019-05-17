import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { WeatherForecastItem } from "./WeatheForecastItem";

const WEATHER_FORECAST_TIME = "12:00:00";

const WeatherForecast = props => {
  const render = [];
  render.push(props.appState.forecast[props.appState.forecast.length - 1]);

  return !render.includes(undefined)
    ? render.map(weatherForecast =>
        weatherForecast.list
          .filter(time => time.dt_txt.includes(WEATHER_FORECAST_TIME))
          .map((forecastItem, i) => (
            <WeatherForecastItem key={i} state={forecastItem} />
          ))
      )
    : "";
};

export default connect(state => ({
  appState: state
}))(WeatherForecast);
