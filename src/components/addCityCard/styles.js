import styled from "styled-components/native";

export const Container = styled.View`
  width: 95%;
  justify-content: center;
  padding: 16px;
  margin-top: 16px;
  background-color: ${(props) => props.theme.primaryBackgroundColor};
`;

export const HStack = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const VStack = styled.View`
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${(props) =>
    props.color || props.theme.terciaryButtonColor};
`;
