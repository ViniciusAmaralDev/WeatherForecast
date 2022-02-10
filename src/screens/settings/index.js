import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import Context from "../../context";
import { Container, Button, HStack } from "./styles";
import Text from "../../components/text";

export default function Settings() {
  const { dispatch, theme, state } = useContext(Context);

  const PTBR = "pt_br";
  const EN = "en";

  const CELSIUS = "Celsius";
  const FAHRENHEIT = "Fahrenheit";

  const [language, setLanguage] = useState("");
  const [temperatureScale, setTemperatureScale] = useState("");

  const [languageTitle, setLanguageTitle] = useState("");
  const [scaleTitle, setScaleTitle] = useState("");

  const [portugueseButtonText, setPortugueseButtonText] = useState("");
  const [englishButtonText, setEnglishButtonText] = useState("");

  const handleLanguage = (language) => {
    dispatch({ type: "handleLanguage", payload: language });
  };

  const handleTemperature = (temperatureScale) => {
    dispatch({ type: "handleTemperatureScale", payload: temperatureScale });
  };

  useEffect(() => {
    const {
      selectedLanguage,
      selectedTemperatureScale,
      settings: {
        applicationLanguageTitleText,
        temperatureScaleTitleText,
        portugueseButtonText,
        englishButtonText,
      },
    } = state.settingsApplication;

    setLanguage(selectedLanguage);
    setTemperatureScale(selectedTemperatureScale);
    setLanguageTitle(applicationLanguageTitleText[selectedLanguage]);
    setScaleTitle(temperatureScaleTitleText[selectedLanguage]);
    setPortugueseButtonText(portugueseButtonText[selectedLanguage]);
    setEnglishButtonText(englishButtonText[selectedLanguage]);
  }, [state]);

  return (
    <>
      <StatusBar
        barStyle={theme.barStyle}
        backgroundColor={theme.primaryBackgroundColor}
      />
      <Container>
        <Text value={languageTitle} bold mb={16} size={20} />
        <HStack>
          <Button
            onPress={() => handleLanguage(PTBR)}
            active={language === PTBR ? true : false}
          >
            <Text value={portugueseButtonText} semiBold size={18} />
          </Button>
          <Button
            onPress={() => handleLanguage(EN)}
            active={language === EN ? true : false}
          >
            <Text value={englishButtonText} semiBold size={18} />
          </Button>
        </HStack>

        <Text value={scaleTitle} bold mb={16} mt={24} size={20} />
        <HStack>
          <Button
            onPress={() => handleTemperature(CELSIUS.toLowerCase())}
            active={temperatureScale === CELSIUS.toLowerCase() ? true : false}
          >
            <Text value={CELSIUS} semiBold size={18} />
          </Button>
          <Button
            onPress={() => handleTemperature(FAHRENHEIT.toLowerCase())}
            active={
              temperatureScale === FAHRENHEIT.toLowerCase() ? true : false
            }
          >
            <Text value={FAHRENHEIT} semiBold size={18} />
          </Button>
        </HStack>
      </Container>
    </>
  );
}
