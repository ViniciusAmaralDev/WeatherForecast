import React from "react";
import { Container, FlatList } from "./styles";
import Item from "./item";

export default function Hourly({ hourly }) {
  return (
    <Container>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={hourly}
        renderItem={({ item }) => <Item hourly={item} />}
      />
    </Container>
  );
}
