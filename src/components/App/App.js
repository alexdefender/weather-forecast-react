import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import { Nav } from '../Nav';
import { History } from '../History';
import { WeatherForecast } from '../WeatherForecast';
import { CurrentWeather } from '../CurrentWeather';
import WeatherDataServices from '../../utils/WeatherDataServices';
import {
    addCity,
    addCurrentWeather,
    addWeatherForecast,
} from '../../store/actions';

class App extends Component {
    componentDidMount() {
        this.getInfoFromApi('kiev');
    }

    handleSubmit = e => {
        e.preventDefault();

        this.getInfoFromApi(this.cityInput.value);
        this.cityInput.value = '';
    };

    getInfoFromApi = city => {
        const cityLowerCase = city.toLowerCase();

        WeatherDataServices.getCurrentWeather(cityLowerCase).then(
            currentWeather => {
                WeatherDataServices.getWeatherForecast(cityLowerCase).then(
                    weatherForecast => {
                        if (currentWeather.message === 'city not found') {
                            alert('No found city, please correct name!');
                            return false;
                        }
                        this.props.addCurrentWeather(currentWeather);
                        this.props.addWeatherForecast(weatherForecast);
                        this.props.addCity(cityLowerCase);
                    }
                );
            }
        );
    };

    render() {
        return (
            <Router>
                <div className='container'>
                    <h1 className='header'>React Weather Forecast</h1>
                    <div className='search-wrapper'>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                placeholder='Enter city in english... (Kiev, UA)'
                                className='search-input'
                                type='text'
                                ref={input => {
                                    this.cityInput = input;
                                }}
                            />
                        </form>
                    </div>
                    <Nav />
                    <History getInfoFromApi={this.getInfoFromApi} />
                    <Route exact path='/' component={CurrentWeather} />
                    <Route path='/next' component={WeatherForecast} />
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    appState: state,
});

export default connect(mapStateToProps, {
    addCity,
    addCurrentWeather,
    addWeatherForecast,
})(App);
