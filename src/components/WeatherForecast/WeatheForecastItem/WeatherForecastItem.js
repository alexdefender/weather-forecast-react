import React from 'react';

const WeatherForecastItem = ({ weatherForecast }) => {
    const { weather, dt_txt, main, wind } = weatherForecast;
    const imgSrc = `https://openweathermap.org/img/w/${weather[0].icon}.png`;
    const temp = Math.round(main.temp);
    const weatherDescription = weather[0].description.toUpperCase();

    return (
        <div className='forecast-weather-info'>
            <div>
                <h2>{weather[0].main}</h2>
                <p>{dt_txt.substr(0, 10)}</p>
            </div>
            <img src={imgSrc} alt='' className='forecast-weather__img' />
            <ul>
                <li>{temp}&deg;</li>
                <li>{wind.speed} m/s</li>
            </ul>
            <p className='forecast-weather__description'>
                {weatherDescription}
            </p>
        </div>
    );
};

export default WeatherForecastItem;
