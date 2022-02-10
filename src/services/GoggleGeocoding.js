import { GOOGLE_GEOCODING_API_KEY } from "react-native-dotenv";
import axios from "axios";

const api = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/geocode/json?address=",
});

export const getAddressAndCoordinatesInformation = async (address) => {
  try {
    const {
      data: { results },
    } = await api.get(`${address}&key=${GOOGLE_GEOCODING_API_KEY}`);

    const {
      geometry: {
        location: { lat, lng },
      },
    } = results[0];
    const addressComponentsLength = results[0].address_components.length;
    let city, country;

    city = results[0].address_components[0].long_name;
    if (addressComponentsLength > 1) {
      country =
        results[0].address_components[addressComponentsLength - 1].long_name;
    } else {
      country = city;
    }

    return { latitude: lat, longitude: lng, city, country };
  } catch (err) {
    throw err;
  }
};
