import React, {Component} from "react";
import "./style.scss";
import {connect} from "react-redux";

class CurrentWeather extends Component {

    render() {
        console.log(this.props.appState.current)

        return this.props.appState.current.map((item, i) =>
            <div key={i} className="current-weather-info">
                <div className="current-weather__main">
                    <div className="current-weather__city">{item.name}, {item.sys.country}</div>
                    <div className="current-weather__temp">{Math.round(item.main.temp)}&deg;
                        <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} />
                    </div>
                    <div className="current-weather__description">{item.weather[0].description.toUpperCase()}</div>
                </div>
                <div className="current-weather__more">
                    <ul>

                        <li>Humidity: {item.main.humidity} %</li>
                        <li>Pressure: {item.main.pressure} mb</li>
                        <li>Wind speed: {item.wind.speed} m/s</li>
                        <li>Clouds: {item.clouds.all}</li>
                    </ul>
                </div>
            </div>)
    }
}

export default connect(
    state => ({
        appState: state
    })
)
(CurrentWeather);
