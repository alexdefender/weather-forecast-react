import React, {Component} from "react";
import "./style.scss";
import {connect} from "react-redux"
import {WeatherForecastItem} from "./WeatheForecastItem";

const WEATHER_FORECAST_TIME = "12:00:00";

class WeatherForecast extends Component {
    render() {
        const render = [];
        render.push(this.props.appState.forecast[this.props.appState.forecast.length - 1]);

        return !render.includes(undefined) ? render
            .map(weatherForecast =>
                weatherForecast.list
                    .filter(time => time.dt_txt.includes(WEATHER_FORECAST_TIME))
                    .map((forecastItem, i) =>
                        <div key={i} className="weather-info">
                            <WeatherForecastItem state={forecastItem}/>
                        </div>
                    )) : "";
    }
}

export default connect(
    state => ({
        appState: state
    })
)(WeatherForecast);
