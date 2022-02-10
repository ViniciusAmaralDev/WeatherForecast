import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Alert } from "react-native";
import { Container, HStack, VStack, Button } from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Text from "../text";

import Context from "../../context";

import {
  getWeatherForecastInFahrenheitAndEnglish,
  getWeatherForecastInCelsiusAndEnglish,
  getWeatherForecastInFahrenheitAndPortuguese,
  getWeatherForecastInCelsiusAndPortuguese,
} from "../../services/OpenWeatherMap";

export default function AddCityCard({ data }) {
  const { latitude, longitude, city, country } = data;
  const { theme, dispatch, state } = useContext(Context);

  const [logFahrenheitEnglish, setLogFahrenheitEnglish] = useState("");
  const [logFahrenheitPortuguese, setLogFahrenheitPortuguese] = useState("");
  const [logCelsiusEnglish, setLogCelsiusEnglish] = useState("");
  const [logCelsiusPortuguese, setLogCelsiusPortuguese] = useState("");

  useEffect(() => {
    const {
      settingsApplication: {
        selectedLanguage,
        search: {
          logFahrenheitEnglish,
          logFahrenheitPortuguese,
          logCelsiusEnglish,
          logCelsiusPortuguese,
        },
      },
    } = state;

    setLogFahrenheitEnglish(logFahrenheitEnglish[selectedLanguage]);
    setLogFahrenheitPortuguese(logFahrenheitPortuguese[selectedLanguage]);
    setLogCelsiusEnglish(logCelsiusEnglish[selectedLanguage]);
    setLogCelsiusPortuguese(logCelsiusPortuguese[selectedLanguage]);
  }, [state]);

  const [log, setLog] = useState("");
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const addCity = async () => {
    setLoading(true);
    try {
      setLog(logFahrenheitEnglish);
      const weatherForecastInFahrenheitAndEnglish = await getWeatherForecastInFahrenheitAndEnglish(
        latitude,
        longitude
      );
      dispatch({
        type: "saveWeatherForecastInFahrenheitAndEnglishInContext",
        payload: {
          location: data,
          current: weatherForecastInFahrenheitAndEnglish.current,
          hourly: weatherForecastInFahrenheitAndEnglish.hourly,
          daily: weatherForecastInFahrenheitAndEnglish.daily,
        },
      });
    } catch (err) {
      console.log(err);
      return;
    }

    try {
      setLog(logCelsiusEnglish);
      const weatherForecastInCelsiusAndEnglish = await getWeatherForecastInCelsiusAndEnglish(
        latitude,
        longitude
      );
      dispatch({
        type: "saveWeatherForecastInCelsiusAndEnglishInContext",
        payload: {
          location: data,
          current: weatherForecastInCelsiusAndEnglish.current,
          hourly: weatherForecastInCelsiusAndEnglish.hourly,
          daily: weatherForecastInCelsiusAndEnglish.daily,
        },
      });
    } catch (err) {
      console.log(err);
      return;
    }

    try {
      setLog(logFahrenheitPortuguese);
      const weatherForecastInFahrenheitAndPortuguese = await getWeatherForecastInFahrenheitAndPortuguese(
        latitude,
        longitude
      );
      dispatch({
        type: "saveWeatherForecastInFahrenheitAndPortugueseInContext",
        payload: {
          location: data,
          current: weatherForecastInFahrenheitAndPortuguese.current,
          hourly: weatherForecastInFahrenheitAndPortuguese.hourly,
          daily: weatherForecastInFahrenheitAndPortuguese.daily,
        },
      });
    } catch (err) {
      console.log(err);
      return;
    }

    try {
      setLog(logCelsiusPortuguese);
      const weatherForecastInCelsiusAndPortuguese = await getWeatherForecastInCelsiusAndPortuguese(
        latitude,
        longitude
      );
      dispatch({
        type: "saveWeatherForecastInCelsiusAndPortugueseInContext",
        payload: {
          location: data,
          current: weatherForecastInCelsiusAndPortuguese.current,
          hourly: weatherForecastInCelsiusAndPortuguese.hourly,
          daily: weatherForecastInCelsiusAndPortuguese.daily,
        },
      });
    } catch (err) {
      console.log(err);
      return;
    } finally {
      setSaved(true);
      setLoading(false);
    }
  };

  const cityIsAdded = () => {
    if (state.weatherForecasts.length > 0) {
      state.weatherForecasts.forEach((item) => {
        if (item.city === city) {
          setSaved(true);
        }
      });
    }
  };

  useEffect(() => {
    cityIsAdded();
  }, []);

  return (
    <>
      <Container style={{ elevation: 3 }}>
        <HStack>
          <VStack>
            <Text value={city} bold size={20} />
            <Text value={country} size={16} />
          </VStack>
          <Button
            color={
              loading ? theme.terciaryTextColor : theme.terciaryButtonColor
            }
            onPress={() =>
              loading === false
                ? saved === false
                  ? addCity()
                  : Alert.alert(
                      "Atenção",
                      "Este lugar ja foi adicionado, tente outro!"
                    )
                : false
            }
          >
            {!loading ? (
              <MaterialIcons
                name={saved ? "check" : "add"}
                size={30}
                color="#FFFFFF"
              />
            ) : (
              <ActivityIndicator size="small" color="#FFFFFF" />
            )}
          </Button>
        </HStack>
        {loading && (
          <Text value={log} center semiBold terciary size={14} mt={8} />
        )}
      </Container>
    </>
  );
}
