import React, {Component} from "react";
import "./style.scss";
import {Nav} from "../Nav"
import {History} from "../History"
import {BrowserRouter as Router, Route} from "react-router-dom";
import {WeatherForecast} from "../WeatherForecast"
import {CurrentWeather} from "../CurrentWeather"
import WeatherDataServices from "../../services/WeatherDataServices"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {items: [], value: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.value.length) {
            return;
        }

        const newItem = {
            value: this.state.value
        };

        this.setState(state => ({
            items: state.items.concat(newItem),
            value: ""
        }));
        WeatherDataServices.getCurrentWeather(this.state.value);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <h1 className="header">Weather Forecast React</h1>
                    <div className="search-wrapper">
                        <form onSubmit={this.handleSubmit}>
                            <input className="search-input" type="text" value={this.state.value} onChange={this.handleChange}/>
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

export default App;
