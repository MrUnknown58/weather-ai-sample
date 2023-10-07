import React from "react";
import LottieFiles from "./lottieFiles/lottieFiles";

import hazeAnimation from "./lottieFiles/hazeAnimation.json";
import rainAnimation from "./lottieFiles/rainAnimation.json";
import sunnyAnimation from "./lottieFiles/sunnyAnimation.json";
import thunderAnimation from "./lottieFiles/thunderAnimation.json";
import cloudyAnimation from "./lottieFiles/cloudyAnimation.json";
const getAnimationName = (weather) => {
  switch (weather) {
    case "Haze":
      return hazeAnimation;
      break;
    case "Mist":
      return hazeAnimation;
    case "Clouds":
      return cloudyAnimation;
      break;
    case "Clear":
      return sunnyAnimation;
      break;
    case "Rain":
      return rainAnimation;
      break;
    default:
      return sunnyAnimation;
  }
};
const WeatherInfo = async ({ data, unit }) => {
  const date = new Date();
  const offset =
    date.getTimezoneOffset() == 0 ? 0 : -1 * date.getTimezoneOffset();

  let normalized = new Date(date.getTime() + offset * 60000);
  let indiaTime = new Date(
    normalized.toLocaleString("en-US", { timeZone: "Asia/Calcutta" })
  );
  const formattedTime = `${indiaTime.getUTCHours()}:${indiaTime.getUTCMinutes()}`;
  const animation = await getAnimationName(data?.weather[0].main);
  return (
    <div className="h-full flex flex-col justify-center text-5xl space-y-4">
      <div>
        {data?.main.temp.toFixed()} °{" "}
        <span className="pl-1"> {unit === "metric" ? "C" : "F"} </span>
      </div>
      <div className="flex h-14 space-x-4">
        <span>{data?.name}</span>
        <LottieFiles animation={animation} />
      </div>
      <span className="text-lg text-neutral-300">
        {formattedTime} | H: {data?.main.temp_max} °{" "}
        <span className="pl-1"> {unit === "metric" ? "C" : "F"} </span> | L:{" "}
        {data?.main.temp_min}°{" "}
        <span className="pl-1"> {unit === "metric" ? "C" : "F"} </span>
      </span>
    </div>
  );
};

export default WeatherInfo;
