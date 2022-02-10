export default [];

const weatherForecasts = [
  {
    pt_br: [
      {
        celsius: [
          {
            region: [{}],
          },
        ],
        fahrenheit: [
          {
            region: [{}],
          },
        ],
      },
    ],
    en: [
      {
        celsius: [
          {
            region: [{}],
          },
        ],
        fahrenheit: [
          {
            region: [{}],
          },
        ],
      },
    ],
  },
];

export const a = {
  pt_br: {
    celsius: {
      region: [
        {
          latitude: 0,
          longitude: 0,
          city: "",
          country: "",
          favorite: true,
          // Previsão do tempo atual
          current: {
            dt: 0, // Hora atual, Unix, UTC
            sunrise: 0, // Hora do nascer do sol, Unix, UTC
            sunset: 0, // Hora do pôr do sol, Unix, UTC
            temperature: 0, // Temperatura
            thermalSensation: 0, // Sensação térmica
            minimumTemperature: 0, // Temperatura mínima
            maximumTemperature: 0, // Temperatura máxima
            pressure: 0, // Pressão atmosférica ao nível do mar, hPa
            humidity: 0, // Humidade %
            uvi: 0, // Indice UV atual
            clouds: 0, // Nublado %
            visibility: "", // Visibilidade em metros
            wind_speed: 0, // Velocidade do vento
            // Clima
            weather: [
              {
                description: "", // Descrição do clima
                icon: "", // Icone PNG
              },
            ],
          },
          // Previsão do tempo de hora em hora
          hourly: [
            {
              dt: 0, // Hora atual, Unix, UTC
              temperature: 0, // Temperatura
              pressure: 0, // Pressão atmosférica ao nível do mar, hPa
              humidity: 0, // Humidade %
              uvi: 0, // Indice UV atual
              clouds: 0, // Nublado %
              visibility: "", // Visibilidade em metros
              wind_speed: 0, // Velocidade do vento
              // Clima
              weather: [
                {
                  description: "", // Descrição do clima
                  icon: "", // Icone PNG
                },
              ],
            },
          ],
          // Previsão do tempo diário
          daily: [
            {
              dt: 0, // Hora atual, Unix, UTC
              sunrise: 0, // Hora do nascer do sol, Unix, UTC
              sunset: 0, // Hora do pôr do sol, Unix, UTC
              moonrise: 0, // A hora de quando a lua nasce para este dia, Unix, UTC
              moonset: 0, // A hora de quando a lua se põe para este dia, Unix, UTC
              // Temperaturas
              temp: {
                min: 0, // Temperatura mínima diária.
                max: 0, // Temperatura máxima diária.
                morn: 0, // Temperatura da manhã.
                day: 0, // Temperatura do dia.
                eve: 0, // Temperatura da noite.
                night: 0, // Temperatura noturna.
              },
              // Temperatura da sensação térmica
              feels_like: {
                morn: 0, // Sensação térmica da manhã
                day: 0, // Sensação térmica do dia
                eve: 0, // Sensação térmica da noite
                night: 0, // Sensação térmica noturna
              },
              pressure: 0, // Pressão atmosférica ao nível do mar, hPa
              humidity: 0, // Humidade %
              wind_speed: 0, // Velocidade do vento
              // Clima
              weather: [
                {
                  description: "", // Descrição do clima
                  icon: "", // Icone PNG
                },
              ],
            },
          ],
        },
      ],
    },
    fahrenheit: {
      region: [
        {
          latitude: 0,
          longitude: 0,
          city: "",
          country: "",
          favorite: true,
          // Previsão do tempo atual
          current: {
            dt: 0, // Hora atual, Unix, UTC
            sunrise: 0, // Hora do nascer do sol, Unix, UTC
            sunset: 0, // Hora do pôr do sol, Unix, UTC
            temperature: 0, // Temperatura
            thermalSensation: 0, // Sensação térmica
            minimumTemperature: 0, // Temperatura mínima
            maximumTemperature: 0, // Temperatura máxima
            pressure: 0, // Pressão atmosférica ao nível do mar, hPa
            humidity: 0, // Humidade %
            uvi: 0, // Indice UV atual
            clouds: 0, // Nublado %
            visibility: "", // Visibilidade em metros
            wind_speed: 0, // Velocidade do vento
            // Clima
            weather: [
              {
                description: "", // Descrição do clima
                icon: "", // Icone PNG
              },
            ],
          },
          // Previsão do tempo de hora em hora
          hourly: [
            {
              dt: 0, // Hora atual, Unix, UTC
              temperature: 0, // Temperatura
              pressure: 0, // Pressão atmosférica ao nível do mar, hPa
              humidity: 0, // Humidade %
              uvi: 0, // Indice UV atual
              clouds: 0, // Nublado %
              visibility: "", // Visibilidade em metros
              wind_speed: 0, // Velocidade do vento
              // Clima
              weather: [
                {
                  description: "", // Descrição do clima
                  icon: "", // Icone PNG
                },
              ],
            },
          ],
          // Previsão do tempo diário
          daily: [
            {
              dt: 0, // Hora atual, Unix, UTC
              sunrise: 0, // Hora do nascer do sol, Unix, UTC
              sunset: 0, // Hora do pôr do sol, Unix, UTC
              moonrise: 0, // A hora de quando a lua nasce para este dia, Unix, UTC
              moonset: 0, // A hora de quando a lua se põe para este dia, Unix, UTC
              // Temperaturas
              temp: {
                min: 0, // Temperatura mínima diária.
                max: 0, // Temperatura máxima diária.
                morn: 0, // Temperatura da manhã.
                day: 0, // Temperatura do dia.
                eve: 0, // Temperatura da noite.
                night: 0, // Temperatura noturna.
              },
              // Temperatura da sensação térmica
              feels_like: {
                morn: 0, // Sensação térmica da manhã
                day: 0, // Sensação térmica do dia
                eve: 0, // Sensação térmica da noite
                night: 0, // Sensação térmica noturna
              },
              pressure: 0, // Pressão atmosférica ao nível do mar, hPa
              humidity: 0, // Humidade %
              wind_speed: 0, // Velocidade do vento
              // Clima
              weather: [
                {
                  description: "", // Descrição do clima
                  icon: "", // Icone PNG
                },
              ],
            },
          ],
        },
      ],
    },
  },
  en: {
    celsius: {
      region: [
        {
          latitude: 0,
          longitude: 0,
          city: "",
          country: "",
          favorite: true,
          // Previsão do tempo atual
          current: {
            dt: 0, // Hora atual, Unix, UTC
            sunrise: 0, // Hora do nascer do sol, Unix, UTC
            sunset: 0, // Hora do pôr do sol, Unix, UTC
            temperature: 0, // Temperatura
            thermalSensation: 0, // Sensação térmica
            minimumTemperature: 0, // Temperatura mínima
            maximumTemperature: 0, // Temperatura máxima
            pressure: 0, // Pressão atmosférica ao nível do mar, hPa
            humidity: 0, // Humidade %
            uvi: 0, // Indice UV atual
            clouds: 0, // Nublado %
            visibility: "", // Visibilidade em metros
            wind_speed: 0, // Velocidade do vento
            // Clima
            weather: [
              {
                description: "", // Descrição do clima
                icon: "", // Icone PNG
              },
            ],
          },
          // Previsão do tempo de hora em hora
          hourly: [
            {
              dt: 0, // Hora atual, Unix, UTC
              temperature: 0, // Temperatura
              pressure: 0, // Pressão atmosférica ao nível do mar, hPa
              humidity: 0, // Humidade %
              uvi: 0, // Indice UV atual
              clouds: 0, // Nublado %
              visibility: "", // Visibilidade em metros
              wind_speed: 0, // Velocidade do vento
              // Clima
              weather: [
                {
                  description: "", // Descrição do clima
                  icon: "", // Icone PNG
                },
              ],
            },
          ],
          // Previsão do tempo diário
          daily: [
            {
              dt: 0, // Hora atual, Unix, UTC
              sunrise: 0, // Hora do nascer do sol, Unix, UTC
              sunset: 0, // Hora do pôr do sol, Unix, UTC
              moonrise: 0, // A hora de quando a lua nasce para este dia, Unix, UTC
              moonset: 0, // A hora de quando a lua se põe para este dia, Unix, UTC
              // Temperaturas
              temp: {
                min: 0, // Temperatura mínima diária.
                max: 0, // Temperatura máxima diária.
                morn: 0, // Temperatura da manhã.
                day: 0, // Temperatura do dia.
                eve: 0, // Temperatura da noite.
                night: 0, // Temperatura noturna.
              },
              // Temperatura da sensação térmica
              feels_like: {
                morn: 0, // Sensação térmica da manhã
                day: 0, // Sensação térmica do dia
                eve: 0, // Sensação térmica da noite
                night: 0, // Sensação térmica noturna
              },
              pressure: 0, // Pressão atmosférica ao nível do mar, hPa
              humidity: 0, // Humidade %
              wind_speed: 0, // Velocidade do vento
              // Clima
              weather: [
                {
                  description: "", // Descrição do clima
                  icon: "", // Icone PNG
                },
              ],
            },
          ],
        },
      ],
    },
    fahrenheit: {
      region: [
        {
          latitude: 0,
          longitude: 0,
          city: "",
          country: "",
          favorite: true,
          // Previsão do tempo atual
          current: {
            dt: 0, // Hora atual, Unix, UTC
            sunrise: 0, // Hora do nascer do sol, Unix, UTC
            sunset: 0, // Hora do pôr do sol, Unix, UTC
            temperature: 0, // Temperatura
            thermalSensation: 0, // Sensação térmica
            minimumTemperature: 0, // Temperatura mínima
            maximumTemperature: 0, // Temperatura máxima
            pressure: 0, // Pressão atmosférica ao nível do mar, hPa
            humidity: 0, // Humidade %
            uvi: 0, // Indice UV atual
            clouds: 0, // Nublado %
            visibility: "", // Visibilidade em metros
            wind_speed: 0, // Velocidade do vento
            // Clima
            weather: [
              {
                description: "", // Descrição do clima
                icon: "", // Icone PNG
              },
            ],
          },
          // Previsão do tempo de hora em hora
          hourly: [
            {
              dt: 0, // Hora atual, Unix, UTC
              temperature: 0, // Temperatura
              pressure: 0, // Pressão atmosférica ao nível do mar, hPa
              humidity: 0, // Humidade %
              uvi: 0, // Indice UV atual
              clouds: 0, // Nublado %
              visibility: "", // Visibilidade em metros
              wind_speed: 0, // Velocidade do vento
              // Clima
              weather: [
                {
                  description: "", // Descrição do clima
                  icon: "", // Icone PNG
                },
              ],
            },
          ],
          // Previsão do tempo diário
          daily: [
            {
              dt: 0, // Hora atual, Unix, UTC
              sunrise: 0, // Hora do nascer do sol, Unix, UTC
              sunset: 0, // Hora do pôr do sol, Unix, UTC
              moonrise: 0, // A hora de quando a lua nasce para este dia, Unix, UTC
              moonset: 0, // A hora de quando a lua se põe para este dia, Unix, UTC
              // Temperaturas
              temp: {
                min: 0, // Temperatura mínima diária.
                max: 0, // Temperatura máxima diária.
                morn: 0, // Temperatura da manhã.
                day: 0, // Temperatura do dia.
                eve: 0, // Temperatura da noite.
                night: 0, // Temperatura noturna.
              },
              // Temperatura da sensação térmica
              feels_like: {
                morn: 0, // Sensação térmica da manhã
                day: 0, // Sensação térmica do dia
                eve: 0, // Sensação térmica da noite
                night: 0, // Sensação térmica noturna
              },
              pressure: 0, // Pressão atmosférica ao nível do mar, hPa
              humidity: 0, // Humidade %
              wind_speed: 0, // Velocidade do vento
              // Clima
              weather: [
                {
                  description: "", // Descrição do clima
                  icon: "", // Icone PNG
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

export const saveWeatherForecastInFahrenheitAndEnglishInContext = (
  state,
  action
) => {
  const { location, current, hourly, daily } = action.payload;

  const newWeatherForecast = {
    language: "en",
    temperatureScale: "fahrenheit",
    ...location,
    favorite: false,
    current,
    hourly,
    daily,
  };

  return {
    ...state,
    weatherForecasts: [...state.weatherForecasts, newWeatherForecast],
  };
};

export const saveWeatherForecastInCelsiusAndEnglishInContext = (
  state,
  action
) => {
  const { location, current, hourly, daily } = action.payload;

  const newWeatherForecast = {
    language: "en",
    temperatureScale: "celsius",
    ...location,
    favorite: false,
    current,
    hourly,
    daily,
  };

  return {
    ...state,
    weatherForecasts: [...state.weatherForecasts, newWeatherForecast],
  };
};

export const saveWeatherForecastInFahrenheitAndPortugueseInContext = (
  state,
  action
) => {
  const { location, current, hourly, daily } = action.payload;

  const newWeatherForecast = {
    language: "pt_br",
    temperatureScale: "fahrenheit",
    ...location,
    favorite: false,
    current,
    hourly,
    daily,
  };

  return {
    ...state,
    weatherForecasts: [...state.weatherForecasts, newWeatherForecast],
  };
};

export const saveWeatherForecastInCelsiusAndPortugueseInContext = (
  state,
  action
) => {
  const { location, current, hourly, daily } = action.payload;

  const newWeatherForecast = {
    language: "pt_br",
    temperatureScale: "celsius",
    ...location,
    favorite: false,
    current,
    hourly,
    daily,
  };

  return {
    ...state,
    weatherForecasts: [...state.weatherForecasts, newWeatherForecast],
  };
};

export const handleFavorite = (state, action) => {
  const city = action.payload;

  const weatherForecasts = state.weatherForecasts.map((item) => {
    if (item.city === city) {
      if (item.favorite) item.favorite = false;
      else item.favorite = true;
    }
    return item;
  });

  return {
    ...state,
    weatherForecasts,
  };
};
