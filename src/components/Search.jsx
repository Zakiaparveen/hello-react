import { useState } from "react";
import { MdLocationOn, MdNotificationsNone, MdSearch } from "react-icons/md";

import clear from "../assets/clear.png";
import clouds from "../assets/clouds.png";
import mist from "../assets/mist.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import drizzle from "../assets/drizzle.png";

function Search() {
    const [city, setCity] = useState("Multan");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const weatherImages = {
        sunny: clear,
        clear: clear,
        cloud: clouds,
        cloudy: clouds,
        overcast: clouds,
        rain: rain,
        drizzle: drizzle,
        snow: snow,
        fog: mist,
        mist: mist,
        haze: mist,
    };

    const handleSearch = () => {
        if (!city.trim()) return;

        setLoading(true);
        setError(null);

        fetch(`https://api.weatherapi.com/v1/forecast.json?key=8d8071e4c5d8487e97334556251212&q=${city}&days=1`)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError("City not found");
                    setWeather(null);
                } else {
                    setWeather(data);
                    setError(null);
                }
                setLoading(false);
            })
            .catch(() => {
                setError("City not found");
                setWeather(null);
                setLoading(false);
            });
    };

    const conditionText = weather?.current?.condition?.text?.toLowerCase() || "";
    const weatherImageKey = Object.keys(weatherImages).find(key => conditionText.includes(key));

    return (
        <div className="parent">
            <div className="card">
                <div className="header">
                    <div className="location">
                        <MdLocationOn className="loc-icon" />
                        <input
                            type="text"
                            placeholder="Search City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <MdSearch className="search" onClick={handleSearch} />
                    </div>
                    <MdNotificationsNone className="notify-icon" />
                </div>

                {loading && <h2>Loading...</h2>}
                {error && <h3 style={{ color: "red" }}>{error}</h3>}

                {weather && !loading && (
                    <>
                        {weatherImageKey && <img src={weatherImages[weatherImageKey]} alt="weather" className="weather-img" />}
                        <h3>{weather.location.name}</h3>
                        <h1 className="temp">{weather.current.temp_c}°C</h1>
                        <p className="label">Precipitations</p>

                        <div className="bottom">
                            <div className="b1">
                                <img src={humidity} alt="humidity" className="wind" />
                                <span>{weather.current.humidity}%</span>
                            </div>
                            <div className="b1">
                                <img src={wind} alt="wind" className="wind" />
                                <span>{weather.current.wind_kph} km/h</span>
                            </div>
                            <div className="b1">
                                <img src={rain} alt="rain" className="wind" />
                                <span>{weather.current.precip_mm} mm</span>
                            </div>
                        </div>
                          <div className="today">
              <div className="Date">
                <h4>Today</h4>
                <h4>
                  {new Date().toLocaleDateString("en-US", {
                    day: "numeric",   // date number
                    month: "short"    // month ka short form (Jan, Feb, Mar...)
                  })}
                </h4>
              </div>

              <div className="hours">
                {weather.forecast.forecastday[0].hour
                  .filter((hour) => {
                    const time = hour.time.split(" ")[1];
                    return ["04:00", "05:00", "06:00", "07:00"].includes(time);
                  })
                  .map((hour, index) => {
                    const condition = hour.condition.text.toLowerCase();

                    const iconKey = Object.keys(weatherImages).find(
                      (key) => condition.includes(key)
                    );

                    return (
                      <div className="hour-card" key={index}>
                        <div className="hour-temp">{hour.temp_c}°</div>

                        {iconKey && (
                          <img
                            src={weatherImages[iconKey]}
                            alt=""
                            className="hour-icon"
                          />
                        )}

                        <div className="hour-time">{hour.time.split(" ")[1]}</div>
                      </div>
                    );
                  })}
              </div>
            </div>

                    </>
                )}
            </div>
        </div>
    );
}

export default Search;
