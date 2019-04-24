import React, {Component} from "react";
import {connect} from "react-redux"

class WeatherForecastItem extends Component {
    render() {
        const state = this.props.state;
        return (
            <div className="forecast-weather-info">
                <div>
                    <h2>{state.weather[0].main}</h2>
                    <p>{state.dt_txt.substr(0, 10)}</p>
                </div>
                <img src={`http://openweathermap.org/img/w/${state.weather[0].icon}.png`} alt=""
                     className="forecast-weather__img"/>
                <ul>
                    <li>{Math.round(state.main.temp)}&deg;</li>
                    <li>{state.wind.speed} m/s</li>
                </ul>
                <p className="forecast-weather__description">{state.weather[0].description.toUpperCase()}</p>
            </div>
        );
    }
}

export default connect(
    state => ({
        appState: state
    })
)(WeatherForecastItem);
