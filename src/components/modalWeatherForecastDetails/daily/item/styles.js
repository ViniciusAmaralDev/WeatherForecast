import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
`;

export const HStack = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: ${(props) => props.justify || "flex-start"}
  align-items: center;
`;

export const VStack = styled.View`
  justify-content: center;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
`;
