import React from "react";
import { Container, FlatList } from "./styles";
import Item from "./item";

export default function Daily({ daily }) {
  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={daily}
        renderItem={({ item }) => <Item daily={item} />}
      />
    </Container>
  );
}
