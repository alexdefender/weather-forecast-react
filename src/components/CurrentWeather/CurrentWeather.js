import React from 'react';
import { connect } from 'react-redux';
import './CurrentWeather.scss';

const CurrentWeather = ({ current }) => {
    if (Object.keys(current).length === 0) {
        return '';
    }

    const { name, sys, main, weather, wind, clouds } = current;
    const imgSrc = `https://openweathermap.org/img/w/${weather[0].icon}.png`;
    const temp = Math.round(main.temp);
    const weatherDescription = weather[0].description.toUpperCase();

    return (
        <div className='current-weather-info'>
            <div className='current-weather__main'>
                <div className='current-weather__city'>
                    {name}, {sys.country}
                </div>
                <div className='current-weather__temp'>
                    {temp}&deg;
                    <img src={imgSrc} alt='' />
                </div>
                <div className='current-weather__description'>
                    {weatherDescription}
                </div>
            </div>
            <div className='current-weather__more'>
                <ul>
                    <li>Humidity: {main.humidity} %</li>
                    <li>Pressure: {main.pressure} mb</li>
                    <li>Wind speed: {wind.speed} m/s</li>
                    <li>Clouds: {clouds.all}</li>
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    current: state.current,
});

export default connect(mapStateToProps)(CurrentWeather);
