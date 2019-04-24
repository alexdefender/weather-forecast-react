import React, {Component} from "react";
import "./style.scss";
import {connect} from "react-redux";

class CurrentWeather extends Component {

    render() {
        const render = this.props.appState.current[this.props.appState.current.length - 1];

        return render !== undefined ? (
            <div className="current-weather-info">
                <div className="current-weather__main">
                    <div className="current-weather__city">{render.name}, {render.sys.country}</div>
                    <div className="current-weather__temp">{Math.round(render.main.temp)}&deg;
                        <img src={`http://openweathermap.org/img/w/${render.weather[0].icon}.png`}/>
                    </div>
                    <div className="current-weather__description">{render.weather[0].description.toUpperCase()}</div>
                </div>
                <div className="current-weather__more">
                    <ul>

                        <li>Humidity: {render.main.humidity} %</li>
                        <li>Pressure: {render.main.pressure} mb</li>
                        <li>Wind speed: {render.wind.speed} m/s</li>
                        <li>Clouds: {render.clouds.all}</li>
                    </ul>
                </div>
            </div>) : "";
    }
}

export default connect(
    state => ({
        appState: state
    })
)(CurrentWeather);
