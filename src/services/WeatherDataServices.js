const API_KEY = "&units=metric&APPID=9e5f732b51c403196a6a5096551e6098";
const API_DATA_WEATHER = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_DATA_FORECAST = "https://api.openweathermap.org/data/2.5/forecast?q=";

class WeatherDataService {
    getCurrentWeather(city) {
        return fetch(API_DATA_WEATHER + city  + API_KEY)
            .then(response => {
                // console.log(response.json())
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
    }

    getWeatherForecast(city) {
        return fetch(API_DATA_FORECAST + city + API_KEY)
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export default new WeatherDataService();
