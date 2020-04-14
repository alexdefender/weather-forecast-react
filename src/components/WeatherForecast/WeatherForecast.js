import React from 'react';
import './WeatherForecast.scss';
import { connect } from 'react-redux';
import { WeatherForecastItem } from './WeatheForecastItem';

const WEATHER_FORECAST_TIME = '12:00:00';

const WeatherForecast = ({ forecast }) => {
    if (Object.keys(forecast).length === 0) {
        return '';
    }

    const { list } = forecast;

    return list
        .filter(time => time.dt_txt.includes(WEATHER_FORECAST_TIME))
        .map((weatherForecast, i) => (
            <WeatherForecastItem key={i} {...{ weatherForecast }} />
        ));
};

const mapStateToProps = state => ({
    forecast: state.forecast,
});

export default connect(mapStateToProps)(WeatherForecast);
