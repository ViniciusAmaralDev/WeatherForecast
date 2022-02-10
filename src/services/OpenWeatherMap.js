import { OPEN_WATHER_MAP_API } from "react-native-dotenv";
import axios from "axios";

export const getWeatherForecastInFahrenheitAndEnglish = async (latitude, longitude) => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&lang=en&exclude=minutely,alerts&appid=${OPEN_WATHER_MAP_API}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};

export const getWeatherForecastInCelsiusAndEnglish = async (latitude, longitude) => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=en&exclude=minutely,alerts&appid=${OPEN_WATHER_MAP_API}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};

export const getWeatherForecastInFahrenheitAndPortuguese = async (latitude, longitude) => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&lang=pt_br&exclude=minutely,alerts&appid=${OPEN_WATHER_MAP_API}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};

export const getWeatherForecastInCelsiusAndPortuguese = async (latitude, longitude) => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br&exclude=minutely,alerts&appid=${OPEN_WATHER_MAP_API}`
    );

    return data;
  } catch (err) {
    throw err;
  }
};
