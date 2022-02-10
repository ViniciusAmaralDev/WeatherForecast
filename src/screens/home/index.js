import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import Context from "../../context";
import { Container } from "./styles";

import WeatherForecastCard from "../../components/weatherForecastCard";

export default function Home() {
  const { theme, state } = useContext(Context);
  const [weatherForecast, setWeatherForecast] = useState([]);

  useEffect(() => {
    if (state.weatherForecasts.length > 0) {
      const language = state.settingsApplication.selectedLanguage;
      const temperatureScale =
        state.settingsApplication.selectedTemperatureScale;

      const weatherForecast = state.weatherForecasts.filter((item) =>
        item.language === language && item.temperatureScale === temperatureScale
          ? item.current
          : false
      );
      setWeatherForecast(weatherForecast);
    }
  }, [state]);

  return (
    <>
      <StatusBar
        barStyle={theme.barStyle}
        backgroundColor={theme.primaryBackgroundColor}
      />
      <Container>
        {weatherForecast.length > 0 && (
          <WeatherForecastCard weatherForecast={weatherForecast} full={true} />
        )}
      </Container>
    </>
  );
}
