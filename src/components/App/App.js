import React, {Component} from "react";
import "./style.scss";
import {Nav} from "../Nav"
import {History} from "../History"
import {BrowserRouter as Router, Route} from "react-router-dom";
import {WeatherForecast} from "../WeatherForecast"
import {CurrentWeather} from "../CurrentWeather"
import {connect} from "react-redux";
import WeatherDataServices from "../../services/WeatherDataServices"

class App extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getInfoFromApi = this.getInfoFromApi.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addCity(this.cityInput.value);
        this.getInfoFromApi(this.cityInput.value);
        this.cityInput.value = "";
    }

    getInfoFromApi(city) {
        WeatherDataServices.getCurrentWeather(city)
            .then(currentWeather => {
                WeatherDataServices.getWeatherForecast(city)
                    .then(weatherForecast => {
                        this.props.addCurrentWeather(currentWeather);
                        this.props.addWeatherForecast(weatherForecast);
                    })
            })
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <h1 className="header">Weather Forecast React</h1>
                    <div className="search-wrapper">
                        <form onSubmit={this.handleSubmit}>
                            <input placeholder="Kiev" className="search-input" type="text" ref={(input) => {
                                this.cityInput = input
                            }}/>
                        </form>
                    </div>
                    <Nav/>
                    <History/>
                    <Route exact path="/" component={CurrentWeather}/>
                    <Route path="/next" component={WeatherForecast}/>
                </div>
            </Router>
        );
    }
}

export default connect(
    state => ({
        appState: state
    }),
    dispatch => ({
        addCity: (city) => {
            const payload = {
                id: Date.now().toString(),
                city
            };
            dispatch({type: "ADD_CITY", payload});
        },
        addCurrentWeather: (weather) => {
            const payload = Object.assign({}, weather)
            dispatch({type: "CURRENT_WEATHER", payload});
        },
        addWeatherForecast: (weather) => {
            const payload = Object.assign({}, weather)
            dispatch({type: "WEATHER_FORECAST", payload});
        }
    })
)(App);
