import styled from "styled-components/native";

export const Text = styled.Text`
  text-align: ${(props) =>
    props.args.center ? "center" : props.args.right ? "right" : "left"};
  margin-top: ${(props) => props.args.mt || 0}px;
  margin-bottom: ${(props) => props.args.mb || 0}px;
  margin-left: ${(props) => props.args.ml || 0}px;
  margin-right: ${(props) => props.args.mr || 0}px;
  font-size: ${(props) => props.args.size || 20}px;
  font-family: ${(props) =>
    props.args.light
      ? "Roboto-Light"
      : props.args.semiBold
      ? "Roboto-Medium"
      : props.args.bold
      ? "Roboto-Bold"
      : "Roboto-Regular"};
  color: ${(props) =>
    props.args.secondary
      ? props.theme.secondaryTextColor
      : props.args.terciary
      ? props.theme.terciaryTextColor
      : props.theme.primaryTextColor};
`;
