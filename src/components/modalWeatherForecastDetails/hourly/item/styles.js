import styled from "styled-components/native";

export const Container = styled.View`
  width: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  margin: 0px 4px;
  margin-top: 16px;
  background-color: ${(props) => props.theme.primaryButtonColor};
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
`;

export const HStack = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
