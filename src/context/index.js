import React, { useReducer, createContext } from "react";
import theme from "./Theme";
import weatherForecasts, {
  saveWeatherForecastInFahrenheitAndEnglishInContext,
  saveWeatherForecastInCelsiusAndEnglishInContext,
  saveWeatherForecastInFahrenheitAndPortugueseInContext,
  saveWeatherForecastInCelsiusAndPortugueseInContext,
  handleFavorite,
} from "./WeatherForecast";
import settingsApplication, {
  handleLanguage,
  handleTemperatureScale,
} from "./SettingsApplication";

const initialState = {
  settingsApplication,
  weatherForecasts,
};

const Context = createContext({});

const actions = {
  saveWeatherForecastInFahrenheitAndEnglishInContext,
  saveWeatherForecastInCelsiusAndEnglishInContext,
  saveWeatherForecastInFahrenheitAndPortugueseInContext,
  saveWeatherForecastInCelsiusAndPortugueseInContext,
  handleFavorite,
  handleLanguage,
  handleTemperatureScale,
};

const reducer = (state, action) => {
  const fn = actions[action.type];
  return fn ? fn(state, action) : state;
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, theme, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
