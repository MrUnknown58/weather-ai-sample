import Image from "next/image";
import React from "react";

const WeatherDesc = ({ data, unit }) => {
  return (
    <div className="flex flex-col text-lg space-y-2">
      <div className="flex items-center space-x-2">
        <Image
          src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}.png`}
          height={50}
          width={50}
          alt=""
        />
        <span>{data?.weather[0].main}</span>
      </div>
      <span>
        Feels Like: {data?.main.feels_like} ° {unit === "metric" ? "C" : "F"}
      </span>
      <span>
        Min Temp: {data?.main.temp_min} ° {unit === "metric" ? "C" : "F"}
      </span>
      <span>
        Max Temp: {data?.main.temp_max} ° {unit === "metric" ? "C" : "F"}
      </span>
      <span>Pressure: {data?.main.pressure}</span>
      <span>Humidity: {data?.main.humidity}%</span>
      <span>
        Wind: Speed:{data?.wind.speed}, Degree: {data?.wind.deg}
      </span>
    </div>
  );
};

export default WeatherDesc;
