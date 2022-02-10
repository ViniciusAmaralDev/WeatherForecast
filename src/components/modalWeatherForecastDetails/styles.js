import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 16px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
`;

export const HStack = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

export const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const DetailContainer = styled.View`
  width: 100%;
  margin-top: 32px;
`;