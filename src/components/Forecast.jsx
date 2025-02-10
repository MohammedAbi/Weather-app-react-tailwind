import React from "react";

// Helper function to get the day in a readable format
const getDayName = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleString("en-US", {
    weekday: "long",
  });
};

// Group forecast data by day
const groupForecastByDay = (forecastData) => {
  const grouped = [];

  // Iterate over the forecast data and group it by day
  forecastData.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const day = date.getDate(); // Only group by the day of the month

    // Check if we've already added this day
    if (!grouped.some((group) => new Date(group.dt * 1000).getDate() === day)) {
      grouped.push(item); // Add first item for the day (could adjust to pick specific times if needed)
    }
  });

  return grouped;
};

const Forecast = ({ forecastData }) => {
  // Group the forecast data by day and then take the first 4 days
  const forecastDays = groupForecastByDay(forecastData).slice(0, 4);

  return (
    <div className="w-full max-w-lg bg-blue-600 shadow-lg rounded-xl px-8 py-4 mt-4">
      <h2 className="text-white text-xl font-semibold mb-4">4-Day Forecast</h2>

      {/* Horizontal Scrollable Container */}
      <div className="flex overflow-x-auto space-x-4">
        {forecastDays.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[150px] bg-white shadow-md rounded-xl p-4"
          >
            {/* Display Day Name */}
            <p className="text-sm text-center">
              {getDayName(item.dt)}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="w-[50px] h-[50px] mx-auto"
            />
            <p className="text-center">{item.weather[0].description}</p>
            <h3 className="text-center font-semibold">
              {item.main.temp.toFixed()} °C
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
