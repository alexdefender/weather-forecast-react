import React, {Component} from "react";
import "./style.scss";
import {connect} from "react-redux"
import {WeatherForecastItem} from "./WeatheForecastItem";

const WEATHER_FORECAST_TIME = "12:00:00";

class WeatherForecast extends Component {
    render() {
        return this.props.appState.forecast
            .map(weatherForecast =>
                weatherForecast.list
                    .filter(time => time.dt_txt.includes(WEATHER_FORECAST_TIME))
                    .map((forecastItem, i) =>
                        <div key={i} className="weather-info">
                            <WeatherForecastItem state={forecastItem}/>
                        </div>
                    ));
    }
}

export default connect(
    state => ({
        appState: state
    })
)(WeatherForecast);
