import { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid"; // Import the search icon
import Weather from "./components/Weather"; // Import the Weather component
import Forecast from "./components/Forecast"; // Import the Forecast component

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [data, setdata] = useState({});
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // URL to fetch current weather data
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  // URL to fetch forecast data
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`;

  // Function to fetch current weather and forecast data
  const searchLocation = async (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      setError(""); // Reset error state before each fetch
      try {
        // Fetch current weather data
        const weatherResponse = await fetch(weatherUrl);
        if (!weatherResponse.ok) {
          throw new Error(`Location not found!`);
        }
        const weatherData = await weatherResponse.json();

        // Fetch forecast data
        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) {
          throw new Error(`Forecast data not available!`);
        }
        const forecastData = await forecastResponse.json();

        setLocation(""); // Clear location input
        setdata(weatherData);
        setForecast(forecastData.list); // Save forecast data
      } catch (error) {
        setError(error.message); // Set the error message
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false); // End loading state
      }
    }
  };

  return (
    <div className="flex flex-col justify-start items-center w-full h-screen bg-blue-800">
      {/* Search Input */}
      <div className="relative text-center justify-center items-center p-4 w-full max-w-lg">
        {/* Search Icon */}
        <SearchIcon className="absolute right-12 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />

        <label
          htmlFor="location"
          className="text-white absolute left-4 top-1/2 transform -translate-y-1/2 text-lg sr-only"
        >
          Location:
        </label>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchLocation}
          type="text"
          className="py-3 pl-12 pr-10 w-full text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white/100 shadow-md"
          placeholder="Enter Location"
          aria-label="Enter location"
        />
      </div>

      {/* Loading and Error States */}
      {loading && <div className="bg-blue-800 text-white">Loading...</div>}
      {error && <div className="text-white text-lg">{error}</div>}

      {/* Weather Data */}
      {!loading && !error && (
        <>
          {/* Current Weather */}
          <Weather weatherData={data} />
          {/* 5-Day Forecast */}
          {forecast.length > 0 && <Forecast forecastData={forecast} />}
        </>
      )}
    </div>
  );
}

export default App;
