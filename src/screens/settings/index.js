import React, { useContext } from "react";
import { StatusBar } from "react-native";
import Context from "../../context";
import { Container, Button, HStack } from "./styles";
import Text from "../../components/text";

export default function Settings() {
  const {
    dispatch,
    theme,
    state: {
      settingsApplication: { selectedLanguage, selectedTemperatureScale },
    },
  } = useContext(Context);

  const handleLanguage = (language) => {
    dispatch({ type: "handleLanguage", payload: language });
  };

  const handleTemperature = (temperatureScale) => {
    dispatch({ type: "handleTemperatureScale", payload: temperatureScale });
  };

  return (
    <>
      <StatusBar
        barStyle={theme.barStyle}
        backgroundColor={theme.primaryBackgroundColor}
      />
      <Container>
        <Text value="Idioma do aplicativo" bold mb={16} size={20} />
        <HStack>
          <Button
            onPress={() => handleLanguage("pt_br")}
            active={selectedLanguage === "pt_br" ? true : false}
          >
            <Text value={"Português"} semiBold size={18} />
          </Button>
          <Button
            onPress={() => handleLanguage("en")}
            active={selectedLanguage === "en" ? true : false}
          >
            <Text value={"Inglês"} semiBold size={18} />
          </Button>
        </HStack>

        <Text value="Escala de temperatura" bold mb={16} mt={24} size={20} />
        <HStack>
          <Button
            onPress={() => handleTemperature("celsius")}
            active={selectedTemperatureScale === "celsius" ? true : false}
          >
            <Text value={"Celsius"} semiBold size={18} />
          </Button>
          <Button
            onPress={() => handleTemperature("fahrenheit")}
            active={selectedTemperatureScale === "fahrenheit" ? true : false}
          >
            <Text value={"Fahrenheit"} semiBold size={18} />
          </Button>
        </HStack>
      </Container>
    </>
  );
}
