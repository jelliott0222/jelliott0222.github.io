import React from "react";
import {
  faCloudShowersHeavy,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

export default function InclementWeather() {
  function formatDate(date) {
    return Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeZone: "America/New_York",
    }).format(date);
  }
  const today = new Date();
  const todayFormatted = formatDate(today);
  const weatherDate = "February 19, 2025";
  const weatherDateFormatted = formatDate(new Date(weatherDate));

  return (
    todayFormatted === weatherDateFormatted && (
      <div className="inclement-weather">
        <Icon icon={faCloudShowersHeavy} />
        <div className="inclement-weather-text">
          Due to inclement weather in our area, we will be closed on{" "}
          {weatherDate}. Thank you for your understanding!
        </div>
        <Icon icon={faSnowflake} />
      </div>
    )
  );
}
