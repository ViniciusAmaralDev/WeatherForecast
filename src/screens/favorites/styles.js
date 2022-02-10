import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
`;

export const Title = styled.Text`
  font-size: 50px;
  font-family: 'Roboto-Bold';
  color: #FFFFFF;
`;
