import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api'; 

import { useState } from 'react';

function App() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(
            `${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${WEATHER_API_KEY}`
        );
        const forecastFetch = fetch(
            `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
        );

        Promise.all([currentWeatherFetch, forecastFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();

                setCurrentWeather({ city: searchData.label, ...weatherResponse });
                setForecast({ city: searchData.label, ...forecastResponse });
            })
            .catch((err) => console.error(err));
    };

    console.log(currentWeather);
    console.log(forecast);

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange} />
            <CurrentWeather data={currentWeather} /> {/* Pass data as prop */}
        </div>
    );
}

export default App;