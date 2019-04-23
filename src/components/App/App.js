import React from "react";
import "./style.scss";
import {Nav} from "../Nav"
import {History} from "../History"
import {CurrentWeather} from "../CurrentWeather"
import {WeatherForecast} from "../WeatherForecast"

function App() {
    return (
        <div className="container">
            <h1 className="header">Weather Forecast React</h1>
            <div className="search-wrapper">
                <input className="search-input" type="text"/>
            </div>
            <Nav/>
            <History/>
            <CurrentWeather/>
            <WeatherForecast/>
        </div>
    );
}

export default App;
