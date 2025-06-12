import React, { useState, useEffect } from "react";
import {
  WiHumidity,
  WiStrongWind,
} from "react-icons/wi";
import { FaSun, FaMoon } from "react-icons/fa";

const WeatherApp = () => {
  const [cityInput, setCityInput] = useState("");
  const [weather, setWeather] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const API_KEY = "f0e1cdaba2f8ba0967419a553d702166"; 

  const fetchWeather = async (city) => {
    if (!city.trim()) return alert("Please enter a city name.");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setWeather({
          city: data.name,
          temp: data.main.temp,
          condition: data.weather[0].main,
          icon: data.weather[0].icon,
          humidity: data.main.humidity,
          wind: data.wind.speed,
        });
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();
        if (data.cod === 200) {
          setWeather({
            city: data.name,
            temp: data.main.temp,
            condition: data.weather[0].main,
            icon: data.weather[0].icon,
            humidity: data.main.humidity,
            wind: data.wind.speed,
          });
        }
      } catch (error) {
        console.error("Error fetching geolocation weather:", error);
      }
    });
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  const backgroundClasses = darkMode
    ? "bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
    : "bg-gradient-to-br from-blue-100 via-white to-yellow-100";

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-500 ${backgroundClasses}`}
    >
      <div className="w-full max-w-md bg-black bg-opacity-40 backdrop-blur-md rounded-3xl p-6 shadow-[0_0_40px_rgba(255,255,255,0.2)] text-white border border-white/10 transition-all duration-300 hover:border-white/20">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-white/90">🌤️ Weather App</h1>
          <button
            onClick={toggleTheme}
            className="text-white text-2xl focus:outline-none"
            title="Toggle Theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <div className="relative mb-4">
          <input
            type="text"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            placeholder="Enter city..."
            className="w-full px-4 py-2 pr-12 rounded-md bg-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 hover:bg-white/20"
          />
          <button
            onClick={() => fetchWeather(cityInput)}
            className="absolute right-1 top-1 bottom-1 px-4 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-600 transition duration-300"
          >
            Go
          </button>
        </div>

        {weather && (
          <>
            <div className="flex flex-col items-center text-center space-y-4">
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt={weather.condition}
                className="w-20 h-20"
              />
              <h2 className="text-4xl font-extrabold text-white">
                {weather.temp}°C
              </h2>
              <p className="capitalize text-xl text-white/80">
                {weather.condition}
              </p>
              <p className="text-lg text-white/60">{weather.city}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mt-6">
              <div className="flex items-center gap-2 text-white/80 hover:scale-105 transition-transform duration-300">
                <WiHumidity className="text-3xl text-cyan-300" />
                <span>Humidity: {weather.humidity}%</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 hover:scale-105 transition-transform duration-300">
                <WiStrongWind className="text-3xl text-teal-300" />
                <span>Wind: {weather.wind} km/h</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;