import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
`;

export const HStack = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
  width: 150px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${(props) =>
    props.active
      ? props.theme.primaryButtonColor
      : props.theme.secondaryButtonColor};
`;
