import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 8px;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
`;

export const AnimationContainer = styled.View`
  flex: 1;
  justify-content: ${(props) => props.justify || "center"};
`;

export const InputContainer = styled.View`
  width: 95%;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.theme.terciaryBackgroundColor};
`;

export const Input = styled.TextInput`
  flex: 1;
  font-family: "Roboto-Regular";
  font-size: 18px;
  padding: 0px 16px;
  color: ${(props) => props.theme.primaryTextColor};
`;

export const Button = styled.TouchableOpacity`
  align-items: flex-end;
  margin-right: 16px;
`;
