import React, {Component} from "react";
import "./style.scss";
import {Nav} from "../Nav"
import {History} from "../History"
import {BrowserRouter as Router, Route} from "react-router-dom";
import {WeatherForecast} from "../WeatherForecast"
import {CurrentWeather} from "../CurrentWeather"
import {connect} from "react-redux";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {items: [], value: ""};
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.cityInput.value);

        this.props.onAddCity(this.cityInput.value);
        this.cityInput.value = "";
    }

    render() {
        console.log(this.props.testStore)

        return (
            <Router>
                <div className="container">
                    <h1 className="header">Weather Forecast React</h1>
                    <div className="search-wrapper">
                        <form onSubmit={this.handleSubmit}>
                            <input className="search-input" type="text" ref={(input) => {this.cityInput = input}}/>
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
        testStore: state
    }),
    dispatch => ({
        onAddCity: (city) => {
            const payload = {
              id: Date.now().toString(),
              city
            };
            dispatch({type: "ADD_CITY", payload});
        }
    })
)(App);
