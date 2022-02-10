import React, { useContext, useState } from "react";
import { Container, HStack, VStack, Button } from "./styles";
import Text from "../../text";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Context from "../../../context";
import Modal from "react-native-modal";
import Details from "../../modalWeatherForecastDetails";

export default function Item({ weatherForecast, favorite }) {
  const { dispatch } = useContext(Context);
  const [modalVisible, setModalVisible] = useState(false);

  const selectAsFavorite = () => {
    dispatch({ type: "handleFavorite", payload: weatherForecast.city });
  };

  const handleModalVisible = () => setModalVisible(!modalVisible);

  return (
    <>
      <Container onPress={handleModalVisible}>
        <VStack>
          <VStack justify="space-evenly">
            <HStack>
              <Text value={weatherForecast.city} semiBold size={20} />
              <Text value=" - " size={20} />
              <Text value={weatherForecast.country} size={20} />
            </HStack>
            <Text
              value={weatherForecast.current.weather[0].description}
              terciary
              semiBold
              size={18}
            />
          </VStack>
        </VStack>

        <VStack align="flex-end">
          <Text
            value={`${Math.ceil(weatherForecast.current.temp)}°`}
            bold
            terciary
            size={50}
          />
          <Button onPress={selectAsFavorite}>
            <FontAwesome
              name={favorite ? "heart" : "heart-o"}
              size={25}
              color="#F37C92"
            />
          </Button>
        </VStack>
      </Container>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={handleModalVisible}
      >
        <Details weatherForecast={weatherForecast} favorite={favorite} />
      </Modal>
    </>
  );
}
