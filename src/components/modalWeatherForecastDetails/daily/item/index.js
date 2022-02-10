import React, { useContext } from "react";
import { Container, HStack, VStack, Image } from "./styles";
import Text from "../../../text";
import { getCustomDate } from "../../../../utils/Date";
import Context from "../../../../context";

export default function Daily({ daily }) {
  const {
    state: {
      settingsApplication: { selectedLanguage },
    },
  } = useContext(Context);
  const date = getCustomDate(daily.dt, selectedLanguage);

  return (
    <Container>
      <HStack>
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`,
          }}
        />
        <VStack>
          <Text value={date} ml={8} size={16} />
          <Text value={daily.weather[0].description} ml={8} size={16} />
        </VStack>
      </HStack>

      <HStack justify="flex-end">
        <Text value={`${Math.ceil(daily.temp.day)}°`} bold terciary size={20} />
        <Text value=" - " bold size={20} />
        <Text
          value={`${Math.ceil(daily.temp.night)}°`}
          bold
          secondary
          size={20}
        />
      </HStack>
    </Container>
  );
}
