import React, { useContext, useEffect, useState } from "react";
import { Alert, StatusBar, Keyboard } from "react-native";
import Context from "../../context";
import {
  Container,
  AnimationContainer,
  InputContainer,
  Input,
  Button,
} from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { getAddressAndCoordinatesInformation } from "../../services/GoggleGeocoding";

import Lottie from "lottie-react-native";
import loadingAnimation from "../../assets/animations/loading.json";

import AddCityCard from "../../components/addCityCard";

export default function Search() {
  const { theme, dispatch, state } = useContext(Context);

  const [placeholder, setPlaceholder] = useState("");
  const [searchInputText, setSearchInputText] = useState("");
  const [loading, setLoading] = useState(false);

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const searchAddress = async () => {
    Keyboard.dismiss();
    if (searchInputText.length > 0) {
      setLoading(true);
      try {
        const {
          latitude,
          longitude,
          city,
          country,
        } = await getAddressAndCoordinatesInformation(searchInputText);
        setLatitude(latitude);
        setLongitude(longitude);
        setCity(city);
        setCountry(country);
      } catch (err) {
        Alert.alert("Erro", `${err}`);
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert("Importante", "Você preencher o campo de pesquisa!");
    }
  };

  useEffect(() => {
    const {
      selectedLanguage,
      search: { placeholderInputText },
    } = state.settingsApplication;
    setPlaceholder(placeholderInputText[selectedLanguage]);
  }, [state]);

  return (
    <>
      <StatusBar
        barStyle={theme.barStyle}
        backgroundColor={theme.primaryBackgroundColor}
      />
      <Container>
        <InputContainer style={{ elevation: 3 }}>
          <Input
            placeholder={placeholder}
            placeholderTextColor={theme.primaryTextColor}
            onChangeText={(text) => setSearchInputText(text)}
          />
          <Button
            onPress={() =>
              loading === false ? searchAddress() && setCity("") : false
            }
          >
            <FontAwesome name="search" size={25} color="#FFF" />
          </Button>
        </InputContainer>
        {loading && <Lottie source={loadingAnimation} autoSize autoPlay loop />}
        {city.length > 0 && (
          <AddCityCard data={{ latitude, longitude, city, country }} />
        )}
      </Container>
    </>
  );
}
