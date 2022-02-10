import React, { useContext, useEffect, useState } from "react";
import { Container, FlatList } from "./styles";
import Item from "./item";
import Context from "../../context";

export default function WeatherForecastCard({
  weatherForecast,
  onlyFavorites = false,
  full = false,
}) {
  const { state } = useContext(Context);
  const [favoritesList, setFavoritesList] = useState([]);
  const [others, setOthers] = useState([]);

  useEffect(() => {
    const favorites = weatherForecast.filter((item) => {
      if (item.favorite === true) return item;
      else setOthers(item);
    });
    setFavoritesList(favorites);
  }, [state]);

  return (
    <Container>
      <FlatList
        data={
          full === true
            ? weatherForecast
            : onlyFavorites === true
            ? favoritesList
            : others
        }
        renderItem={({ item }) => (
          <Item weatherForecast={item} favorite={item.favorite} />
        )}
      />
    </Container>
  );
}
