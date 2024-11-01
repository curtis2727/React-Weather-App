Detailed Functionality

1. App Component (App.js)

	•	Purpose: The main component that coordinates data flow, including managing the search input, calling weather APIs, and rendering results.
	•	State Management: Uses useState to create two states:
	•	currentWeather: Holds the data for the current weather of the selected city.
	•	forecast: Holds the forecast data for the selected city.
	•	handleOnSearchChange:
	•	Triggered when a user selects a city from the search bar.
	•	Splits the city’s latitude and longitude, then uses these coordinates to make API requests.
	•	Uses fetch to call two endpoints from OpenWeatherMap:
	•	onecall: Fetches current weather data.
	•	forecast: Fetches weather forecast data.
	•	Both responses are processed and stored in currentWeather and forecast states, respectively.
	•	Data Logging: Console logs currentWeather and forecast to help verify data in development.

2. API Configuration (api.js)

	•	Purpose: Manages API endpoint configuration and authentication.
	•	GeoDB API:
	•	geoApiOptions: Holds request headers required for accessing the GeoDB API, including the API key and host.
	•	GEO_API_URL: Base URL for the GeoDB Cities API used in city searches.
	•	OpenWeatherMap API:
	•	WEATHER_API_URL: Base URL for OpenWeatherMap’s API endpoints.
	•	WEATHER_API_KEY: OpenWeatherMap API key for authorizing requests. If unauthorized, verify the key or obtain a new one from OpenWeatherMap.

3. Search Component (search.js)

	•	Purpose: Enables city search functionality, allowing users to search for cities and get matching suggestions.
	•	State Management:
	•	Uses useState to track the current search input.
	•	loadOptions:
	•	Called when a user types in the search bar.
	•	Fetches matching cities from GeoDB API with a minimum population filter of 1,000,000.
	•	Processes and maps the API response to create a list of city options, each with a label (city name, country code) and a value (latitude longitude).
	•	handleOnChange:
	•	Called when a user selects a city from the search suggestions.
	•	Updates search state with the selected city and triggers onSearchChange (passed from App.js) to fetch weather data for the selected city.

4. CurrentWeather Component (current-weather.js)

	•	Purpose: Displays the current weather details for the selected city.
	•	Structure:
	•	Top Section:
	•	Displays the city name and a brief weather description (e.g., “Sunny”).
	•	Shows an icon representing the current weather condition (e.g., sunny icon for sunny weather).
	•	Bottom Section:
	•	Shows the current temperature.
	•	Provides additional details in rows:
	•	Feels Like: Indicates the perceived temperature.
	•	Wind: Shows the current wind speed.
	•	Humidity: Displays the percentage of humidity.
	•	Pressure: Indicates the atmospheric pressure in hPa (hectopascal units).
	•	Styling: Uses current-weather.css to apply a clean, organized look to the weather display.