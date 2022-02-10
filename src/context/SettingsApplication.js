export default {
  selectedLanguage: "pt_br",
  selectedTemperatureScale: "celsius",
  home: {
    titleScreen: { pt_br: "Previsão do tempo", en: "Wather Forecast" },
  },
  search: {
    titleScreen: { pt_br: "Pesquisar", en: "Search" },
    placeholderInputText: {
      pt_br: "Pesquise por algum lugar",
      en: "search for somewhere",
    },
    logFahrenheitEnglish: {
      pt_br: "Obtendo a previsão na escala Fahrenheit em inglês!",
      en: "Getting the forecast on the Fahrenheit scale in English!",
    },
    logFahrenheitPortuguese: {
      pt_br: "Obtendo a previsão na escala Fahrenheit em português!",
      en: "Getting the forecast on the Fahrenheit scale in portuguese!",
    },
    logCelsiusEnglish: {
      pt_br: "Obtendo a previsão na escala Celsius em inglês!",
      en: "Getting the forecast on the Celsius scale in English!",
    },
    logCelsiusPortuguese: {
      pt_br: "Obtendo a previsão na escala Celsius em português!",
      en: "Getting the forecast on the Celsius scale in portuguese!",
    },
  },
  favorites: {
    titleScreen: { pt_br: "Favoritos", en: "Favorites" },
  },
  settings: {
    titleScreen: { pt_br: "Configurações", en: "Settings" },
    applicationLanguageTitleText: {
      pt_br: "Idioma do aplicativo",
      en: "Application Language",
    },
    temperatureScaleTitleText: {
      pt_br: "Escala de temperatura",
      en: "Temperature Scale",
    },
    portugueseButtonText: { pt_br: "Português", en: "Portuguese" },
    englishButtonText: { pt_br: "Inglês", en: "English" },
  },
};

export const handleLanguage = (state, action) => {
  const settings = state.settingsApplication;
  settings.selectedLanguage = action.payload;

  return {
    ...state,
    settingsApplication: settings,
  };
};

export const handleTemperatureScale = (state, action) => {
  const settings = state.settingsApplication;
  settings.selectedTemperatureScale = action.payload;

  return {
    ...state,
    settingsApplication: settings,
  };
};
