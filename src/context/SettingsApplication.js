export default {
  selectedLanguage: "pt_br",
  selectedTemperatureScale: "celsius",
  home: {
    title: { pt_br: "Previsão do tempo", en: "Wather Forecast" },
  },
  search: {
    title: { pt_br: "Pesquisar", en: "Search" },
  },
  favorites: {
    title: { pt_br: "Favoritos", en: "Favorites" },
  },
  settings: {
    title: { pt_br: "Configurações", en: "Settings" },
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
