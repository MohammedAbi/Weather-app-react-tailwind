import React from "react";

const Weather = ({ weatherData }) => {
  return (
    <div className="flex flex-col justify-start items-center w-full  bg-blue-800">
      {weatherData.weather ? (
        <div className="w-full max-w-lg bg-blue-600 shadow-lg rounded-xl px-8 py-4">
          <div className="flex flex-row justify-between w-full">
            <div className="w-full sm:w-1/2 my-4 flex flex-col justify-between items-start">
              <div>
                <p className="text-white text-xl">
                  {weatherData.name}, {weatherData.sys.country}
                </p>
                <p className="text-white text-sm text-gray-600">
                  {weatherData.weather[0].description}
                </p>
              </div>
              <div>
                <h1 className=" text-white text-4xl sm:text-6xl font-semibold">
                  {weatherData.main.temp.toFixed()} °C
                </h1>
              </div>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col justify-between items-end">
              <div className="relative">
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt="weather icon"
                  className="w-[80px] sm:w-[120px] h-[80px] sm:h-[120px]"
                />
              </div>
              {weatherData.name !== undefined ? (
                <div className="flex flex-col gap-y-2 my-4 mx-auto text-xs sm:text-sm">
                  <div className="flex justify-between gap-x-4 sm:gap-x-8">
                    <p className="text-white ">Feels like</p>
                    <p className="text-white  font-bold w-20">
                      {weatherData.main.feels_like.toFixed()} °C
                    </p>
                  </div>
                  <div className="flex justify-between gap-x-4 sm:gap-x-8">
                    <p className="text-white ">Humidity</p>
                    <p className="text-white  font-bold w-20">
                      {weatherData.main.humidity} %
                    </p>
                  </div>
                  <div className="flex justify-between gap-x-4 sm:gap-x-8">
                    <p className="text-white ">Wind</p>
                    <p className="text-white  font-bold w-20">
                      {weatherData.wind.speed.toFixed()} KPH
                    </p>
                  </div>
                  <div className="flex justify-between gap-x-4 sm:gap-x-8">
                    <p className="text-white ">Pressure</p>
                    <p className="text-white font-bold w-20">
                      {weatherData.main.pressure} hPa
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
