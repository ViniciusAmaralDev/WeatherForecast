import React from "react";
import { Container, HStack, Image } from "./styles";
import Text from "../../../text";
import { format } from "date-fns";

export default function Item({ hourly }) {
  const date = new Date(hourly.dt * 1000);

  return (
    <Container>
      <Text value={format(date, "HH:mm")} size={16} />
      <HStack>
        <Text value={`${Math.ceil(hourly.temp)}°`} size={18} />
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`,
          }}
        />
      </HStack>
      <Text value={hourly.weather[0].description} center size={18} />
    </Container>
  );
}
