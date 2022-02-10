import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin: 8px 0px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.terciaryBackgroundColor};
`;

export const VStack = styled.View`
  flex: 1;
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
`;

export const HStack = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity``;
