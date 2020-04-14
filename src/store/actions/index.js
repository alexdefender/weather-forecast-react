import {
    ADD_CITY,
    DELETE_CITIES,
    WEATHER_FORECAST,
    CURRENT_WEATHER,
} from '../constants/index';

export const addCity = city => ({ type: ADD_CITY, city });
export const addCurrentWeather = payload => ({
    type: CURRENT_WEATHER,
    payload,
});
export const addWeatherForecast = payload => ({
    type: WEATHER_FORECAST,
    payload,
});
export const deleteCities = () => ({ type: DELETE_CITIES });
