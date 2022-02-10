import React, { useContext, useEffect, useState } from "react";
import { Container, HStack, TitleContainer, DetailContainer } from "./styles";
import Text from "../text";
import { isToday } from "../../utils/Date";
import Hourly from "./hourly";
import Daily from "./daily";
import Context from "../../context";

export default function Modal({ weatherForecast, favorite }) {
  const {
    state: {
      settingsApplication: { selectedLanguage },
    },
  } = useContext(Context);

  return (
    <Container>
      <TitleContainer>
        <Text value={weatherForecast.city} bold size={25} />
        <Text value=" - " bold size={25} />
        <Text value={weatherForecast.country} s bold size={25} />
      </TitleContainer>

      <DetailContainer>
        <HStack>
          <Text
            value={selectedLanguage === "pt_br" ? "Temperatura" : "Temperature"}
            size={20}
          />
          <Text
            value={`${Math.ceil(weatherForecast.current.temp)}°`}
            terciary
            bold
            size={20}
          />
        </HStack>
        <HStack>
          <Text
            value={
              selectedLanguage === "pt_br" ? "Sensação Térmica" : "Thermal Sensation"
            }
            size={20}
          />
          <Text
            value={`${Math.ceil(weatherForecast.current.feels_like)}°`}
            terciary
            bold
            size={20}
          />
        </HStack>
        <Hourly hourly={weatherForecast.hourly} />
        <Daily daily={weatherForecast.daily} />
      </DetailContainer>
    </Container>
  );
}
